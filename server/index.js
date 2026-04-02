import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { saveSubmission } from './db.js';
import { sendEmail } from './mailer.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, '.env');
dotenv.config({ path: envPath });

// Validate environment variables
if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
  console.error('❌ ERROR: Missing GMAIL_USER or GMAIL_APP_PASSWORD in .env file');
  console.error(`Looking for .env at: ${envPath}`);
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true,
}));
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, service, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required',
      });
    }

    // Email validation (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email address',
      });
    }

    // Save to database
    const submission = await saveSubmission({
      name,
      email,
      company,
      service,
      message,
    });

    // Send email
    try {
      await sendEmail({
        name,
        email,
        company,
        service,
        message,
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Still return success even if email fails - data is saved
      return res.status(200).json({
        success: true,
        message: 'Submission received (email delivery failed but we have your message)',
        submissionId: submission.id,
      });
    }

    // Success
    res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully!',
      submissionId: submission.id,
    });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({
      success: false,
      error: 'An error occurred while processing your request',
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📧 Gmail user: ${process.env.GMAIL_USER || 'NOT SET'}`);
});
