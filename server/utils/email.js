const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    host: "",
    port: 2525,
    auth: {
        user: "",
        pass: ""
    }
})

const sendEmail = async (to, subject, text) => {
    try {
        await transporter.sendMail({
            from: "<h1>AutoParts</h1>",
            to,
            subject,
            text
        })
    } catch(err) {
        console.log(`Error has been found ${err}`);
    }
}

module.exports = sendEmail;