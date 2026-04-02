import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.join(__dirname, 'submissions.db');

const db = new sqlite3.Database(dbPath);

// Create table if it doesn't exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      company TEXT,
      service TEXT,
      message TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

export function saveSubmission(data) {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO submissions (name, email, company, service, message)
       VALUES (?, ?, ?, ?, ?)`,
      [
        data.name,
        data.email,
        data.company || null,
        data.service || null,
        data.message,
      ],
      function(err) {
        if (err) reject(err);
        else resolve({ id: this.lastID, ...data });
      }
    );
  });
}

export function getAllSubmissions() {
  return new Promise((resolve, reject) => {
    db.all(
      'SELECT * FROM submissions ORDER BY created_at DESC',
      (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      }
    );
  });
}

export default db;
