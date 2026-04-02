# Backend Setup Guide - Automated Contact Form

Your contact form is now connected to a backend that **automatically sends emails and stores submissions**. Follow these steps to get it working:

## ✅ What's New

- **Automatic emails** - Form submissions are sent to your Gmail automatically
- **Database** - All submissions stored in `server/submissions.db`
- **No manual sending** - Just submit the form, we handle the rest
- **Better UX** - Loading states, error messages, success confirmation

---

## 🔧 Setup Steps (Takes 2 minutes)

### Step 1: Get Your Gmail App Password

Since we're sending emails from your Gmail account securely, you need to generate a special "App Password":

1. Go to [myaccount.google.com](https://myaccount.google.com)
2. Click **Security** (left menu)
3. Scroll down to **2-Step Verification** → Click it
4. Complete 2-step setup if you haven't already
5. Go back to Security → scroll down to **App Passwords**
6. Select **Mail** → **Windows Computer** (or your device)
7. Google will show you a **16-character password** like: `abcd efgh ijkl mnop`
8. **Copy this password**

### Step 2: Add Password to Environment

1. Open `server/.env` in your editor
2. Replace `PASTE_YOUR_GMAIL_APP_PASSWORD_HERE` with the 16-char password you just copied
3. Save the file

Example:
```
GMAIL_USER=sandeepsnair1017@gmail.com
GMAIL_APP_PASSWORD=abcdefghijklmnop
PORT=3001
```

### Step 3: Install Server Dependencies

Run this command in your project root:
```bash
npm install && npm install --prefix server
```

This installs:
- `concurrently` - runs frontend + backend together
- Server dependencies (express, nodemailer, sqlite3, etc.)

### Step 4: Start Both Frontend + Backend

Run:
```bash
npm run dev:all
```

You'll see:
```
✅ Server running on http://localhost:3001
```

Your frontend runs on `http://localhost:5173` (as before)
Your API runs on `http://localhost:3001`

---

## 🧪 Test It

1. Open `http://localhost:5173` in your browser
2. Fill out the contact form
3. Click "Send Message"
4. **You should see:** ✅ "Message sent successfully!"
5. **Check your email** (sandeepsnair1017@gmail.com) - you'll receive a formatted email

---

## 📊 View Submissions

Your submissions are stored in `server/submissions.db`. To view them:

**Option A: Using Python**
```bash
python3 -c "
import sqlite3
conn = sqlite3.connect('server/submissions.db')
cursor = conn.cursor()
cursor.execute('SELECT * FROM submissions')
for row in cursor.fetchall():
    print(row)
"
```

**Option B: Download SQLite Browser**
- Download [DB Browser for SQLite](https://sqlitebrowser.org/)
- Open `server/submissions.db`
- Click **Browse Data** tab

---

## ⚠️ Troubleshooting

### "Gmail App Password" error when sending
- Make sure you copied the **16-character password** (without spaces)
- Paste it in `server/.env` as `GMAIL_APP_PASSWORD=`
- Restart the server

### "Cannot POST /api/contact"
- Make sure you ran `npm run dev:all` (NOT just `npm run dev`)
- Server should show `✅ Server running on http://localhost:3001`

### Email not arriving
- Check your Gmail spam folder
- Make sure `GMAIL_USER` matches the account you enabled App Passwords on
- Check server console for errors

### "node: command not found"
- Install [Node.js](https://nodejs.org/) (version 16+)

---

## 📁 Project Structure

```
own_website/
├── server/                    # Backend (NEW)
│   ├── index.js              # Express API
│   ├── db.js                 # SQLite database
│   ├── mailer.js             # Email config
│   ├── package.json          # Backend dependencies
│   ├── .env                  # Your Gmail password (YOU FILL THIS)
│   ├── .env.example          # Template (safe to share)
│   └── submissions.db        # Form submissions database
├── src/
│   ├── components/
│   │   └── Contact.jsx       # Updated form (MODIFIED)
│   └── ...
├── package.json              # Root dependencies (MODIFIED)
├── vite.config.js            # Proxy config (MODIFIED)
└── ...
```

---

## 🚀 Going Live (Production)

When you deploy to production, update these:

1. **`server/.env`** - Use environment variables on your host:
   - Fly.io, Render, Railway: Set `GMAIL_APP_PASSWORD` in the dashboard
   - Heroku: `heroku config:set GMAIL_APP_PASSWORD=...`

2. **`vite.config.js`** - Update proxy target:
   ```js
   '/api': 'https://your-api-domain.com'
   ```

3. **Run both servers:**
   - Frontend: Deploy to Vercel/Netlify
   - Backend: Deploy to Fly.io/Render/Railway

---

## 💬 Questions?

If something doesn't work, check:
1. Server console shows `✅ Server running on http://localhost:3001`
2. Check browser DevTools → Network tab → see `/api/contact` request
3. Check server console for error messages

You've got this! 🎉
