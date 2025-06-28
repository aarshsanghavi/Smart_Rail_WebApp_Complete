const nodemailer = require("nodemailer");

const {
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE
} = require("./emailTemplates");

const transporter = nodemailer.createTransport({
  service: "Gmail", // or use SMTP config for other providers
  auth: {
    user: process.env.EMAIL_USER, // your email address
    pass: process.env.EMAIL_PASS, // your email password or app password
  },
});

///

// 1. Send Verification Email
const sendVerificationEmail = async (to, code) => {
  // Replace the placeholder {verificationCode} in the template with the actual verification code
  const emailHTML = VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", code);

  await transporter.sendMail({
    from: `"Auth App" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Verify your Email",
    html: emailHTML,
  });
};

// 2. Welcome Email
const sendWelcomeEmail = async (to, name) => {
  // Customize this part to use your custom welcome email template or a simple message
  const welcomeHTML = `
    <h1>Welcome, ${name}!</h1>
    <p>We're excited to have you on board. 🎉</p>
    <p>If you have any questions, feel free to reach out to our support team.</p>
  `;

  await transporter.sendMail({
    from: `"Auth App" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Welcome to the App!",
    html: welcomeHTML,
  });
};

// 3. Password Reset Email
const sendPasswordResetEmail = async (to, resetLink) => {
  // Replace the placeholder {resetURL} in the template with the actual reset link
  const emailHTML = PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetLink);

  await transporter.sendMail({
    from: `"Auth App" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Reset Your Password",
    html: emailHTML,
  });
};

// 4. Password Reset Success Email
const sendResetSuccessEmail = async (to) => {
  const emailHTML = PASSWORD_RESET_SUCCESS_TEMPLATE;

  await transporter.sendMail({
    from: `"Auth App" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Password Changed Successfully",
    html: emailHTML,
  });
};

module.exports = {
  sendVerificationEmail,
  sendWelcomeEmail,
  sendPasswordResetEmail,
  sendResetSuccessEmail,
};
