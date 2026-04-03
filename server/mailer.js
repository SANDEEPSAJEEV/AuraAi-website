import nodemailer from 'nodemailer';

// Create a transporter using Gmail App Password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function sendEmail(formData) {
  const htmlContent = `
    <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #fff; background: linear-gradient(135deg, #6366f1, #06b6d4); padding: 20px; border-radius: 8px; margin: 0;">
        ✉️ New Project Inquiry
      </h2>

      <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin-top: 10px;">
        <p style="margin: 0 0 15px 0;"><strong>From:</strong> ${formData.name}</p>
        <p style="margin: 0 0 15px 0;"><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
        <p style="margin: 0 0 15px 0;"><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
        <p style="margin: 0 0 15px 0;"><strong>Service Needed:</strong> ${formData.service || 'Not specified'}</p>
      </div>

      <div style="background: #ffffff; border-left: 4px solid #6366f1; padding: 20px; margin-top: 10px; border-radius: 4px;">
        <h3 style="margin-top: 0; color: #1f2937;">Project Details:</h3>
        <p style="color: #374151; line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
      </div>

      <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin-top: 15px; text-align: center; font-size: 12px; color: #666;">
        <p style="margin: 0;">This email was sent from your Aura AI website contact form.</p>
      </div>
    </div>
  `;

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_RECIPIENT,
    subject: `Project Inquiry from ${formData.name} — ${formData.company || 'No company'}`,
    html: htmlContent,
    replyTo: formData.email,
  };

  return transporter.sendMail(mailOptions);
}

export default transporter;
