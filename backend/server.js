const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/send', (req, res) => {
    const { name, email, description } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ahmedsabzwari7@gmail.com', // Replace with your email
            pass: 'Gragasisbeast123_'   // Replace with your email password
        }
    });

    const mailOptions = {
        from: email,
        to: 'ahmedsabzwari7@gmail.com',  // Replace with your email
        subject: `Contact form submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nDescription:\n${description}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ error: 'Failed to send email', details: error });
        }
        res.status(200).json({ message: 'Email sent successfully', info });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
