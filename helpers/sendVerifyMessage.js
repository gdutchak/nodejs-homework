
const sendMessage = (email) => {
  const msg = {
      to: email,
      from: "galyna.dutchak99@gmail.com",
      subject: 'Verify',
      html: `<p>Let's verify your email so you can start working.</p><a href="/">${email}</a>
      <p>Your link is active for 24 hours. After that, you will need to resend the verification email.</p><a href="http://localhost:3000/api/auth/users/verify/:verificationToken">Verify email</a>`,
    }

    return msg
}

module.exports = {sendMessage}