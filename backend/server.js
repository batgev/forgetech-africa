import express from "express";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
const PORT = 5000;

app.use(
  cors({
    origin: "http://localhost:5173", // Allow frontend origin
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());

sgMail.setApiKey(process.env.SENDERGRID_KEY);

app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await sgMail.send({
      from: "forgetechafrica@gmail.com", // Use verified sender
      reply_to: email, // Set user's email as reply-to
      to: "forgetechafrica@gmail.com",
      subject: "New contact message for FrogeTech-Africa",
      text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
    });
    res.json({ success: true, message: "Message Sent" });
    console.log("Sent");
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT ${PORT}`);
});
