import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "..", ".env") });
const PORT = 5000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  }),
);
app.use(express.json());

app.use(
  express.static(path.join(process.cwd(), "frontend", "dist"), {
    setHeaders: (res, path) => {
      if (path.endsWith(".css")) {
        res.setHeader("Content-Type", "text/css");
      }
    },
  }),
);

// Nodemailer setup
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
if (!emailUser || !emailPass) {
  console.error(
    "Missing EMAIL_USER or EMAIL_PASS in .env. Add Gmail App Password.",
  );
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: emailUser,
    pass: emailPass,
  },
});

const buildMessageText = ({
  fullName,
  email,
  phoneNumber,
  subject,
  message,
  businessName,
  projectDescription,
  serviceType,
  budget,
  timeline,
}) => {
  if (businessName || projectDescription || serviceType || budget || timeline) {
    return `Full Name: ${fullName}
Email: ${email}
Phone Number: ${phoneNumber}
Business Name: ${businessName}
Service Type: ${serviceType}
Budget: ${budget}
Timeline: ${timeline}

Project Description:
${projectDescription}`;
  }

  return `Full Name: ${fullName}
Email: ${email}
Phone Number: ${phoneNumber}
Subject: ${subject}

Message:
${message}`;
};

app.post("/hire", async (req, res) => {
  const [
    name,
    email,
    phoneNumber,
    businessName,
    projectDescription,
    serviceType,
    budget,
    timeline,
  ] = Array.isArray(req.body) ? req.body : [];

  const mailOptions = {
    from: emailUser,
    replyTo: email,
    to: emailUser,
    subject: "New hire request for FrogeTech-Africa",
    text: buildMessageText({
      fullName: name,
      email,
      phoneNumber,
      businessName,
      projectDescription,
      serviceType,
      budget,
      timeline,
    }),
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Message Sent" });
    console.log("Hire request sent successfully");
  } catch (error) {
    console.error("Hire - Email Error:", error);
    res.status(500).json({ error: error.message || "Email send failed" });
  }
});

app.post("/contact", async (req, res) => {
  const { fullName, email, phoneNumber, subject, message } = req.body;

  const mailOptions = {
    from: emailUser,
    replyTo: email,
    to: emailUser,
    subject: "New contact us message for FrogeTech-Africa",
    text: buildMessageText({
      fullName,
      email,
      phoneNumber,
      subject,
      message,
    }),
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Message Sent" });
    console.log("Contact message sent successfully");
  } catch (error) {
    console.error("Contact - Email Error:", error);
    res.status(500).json({ error: error.message || "Email send failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
