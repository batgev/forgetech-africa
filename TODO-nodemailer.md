# Migrate to Nodemailer (replaces SendGrid)

1. ✅ Nodemailer already dependency.
2. Update backend/server.js: Replace sgMail → nodemailer.
3. Add env vars: EMAIL_USER, EMAIL_PASS (Gmail App Password).
4. Test send.
5. Remove @sendgrid/mail, update .env.
6. Complete
