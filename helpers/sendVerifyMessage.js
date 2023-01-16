const sgMail = require('@sendgrid/mail')

const {BASE_URL, SENDGRID_API_KEY} = process.env
sgMail.setApiKey(SENDGRID_API_KEY);

const sendMessage = async (email, verifyToken) => {
  const msg = {
      to: email,
      from: "galyna.dutchak99@gmail.com",
      subject: 'Verify your email',
      html: `<p>Let's verify your email so you can start working.</p><p>${email}</p>
      <a target="_blank" href="${BASE_URL}/api/auth/users/verify/${verifyToken}">Verify email</a>`,
    }

    await sgMail.send(msg)
    return true
}

module.exports = {sendMessage}