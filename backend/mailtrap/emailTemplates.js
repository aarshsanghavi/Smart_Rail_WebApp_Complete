const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Verify Your Email</title>
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f2f4f6; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
    <div style="background-color: #0066cc; color: #fff; padding: 20px; text-align: center;">
      <h2 style="margin: 0;">🔐 Email Verification</h2>
    </div>
    <div style="padding: 20px;">
      <p>Hey there,</p>
      <p>Thank you for registering on <b>Your App</b>! Please use the code below to verify your email:</p>
      <div style="text-align: center; margin: 30px 0;">
        <div style="font-size: 36px; font-weight: bold; color: #0066cc; letter-spacing: 4px;">{verificationCode}</div>
      </div>
      <p>This code is valid for <b>15 minutes</b>.</p>
      <p>If this wasn’t you, you can safely ignore this email.</p>
      <p>Thanks,<br><b>Your App Team</b></p>
    </div>
    <div style="background-color: #f0f0f0; text-align: center; padding: 10px; font-size: 12px; color: #888;">
      This is an automated message. Please do not reply.
    </div>
  </div>
</body>
</html>
`;

const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Reset Your Password</title>
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f2f4f6; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
    <div style="background-color: #ff5722; color: #fff; padding: 20px; text-align: center;">
      <h2 style="margin: 0;">🔑 Reset Your Password</h2>
    </div>
    <div style="padding: 20px;">
      <p>Hello,</p>
      <p>We received a request to reset your password. Click the button below to continue:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="{resetURL}" style="background-color: #ff5722; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 5px;">Reset Password</a>
      </div>
      <p>This link will expire in 1 hour. If you didn’t request this, please ignore this message.</p>
      <p>Stay safe,<br><b>Your App Team</b></p>
    </div>
    <div style="background-color: #f0f0f0; text-align: center; padding: 10px; font-size: 12px; color: #888;">
      This is an automated message. Please do not reply.
    </div>
  </div>
</body>
</html>

`;
const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Password Changed Successfully</title>
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f2f4f6; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
    <div style="background-color: #28a745; color: #fff; padding: 20px; text-align: center;">
      <h2 style="margin: 0;">✅ Password Changed</h2>
    </div>
    <div style="padding: 20px;">
      <p>Hi there,</p>
      <p>Your password has been changed successfully. If you didn’t do this, please contact support immediately.</p>
      <p>Here are some quick tips for staying secure:</p>
      <ul>
        <li>Use a strong and unique password</li>
        <li>Enable two-factor authentication</li>
        <li>Don’t reuse passwords across sites</li>
      </ul>
      <p>Cheers,<br><b>Your App Team</b></p>
    </div>
    <div style="background-color: #f0f0f0; text-align: center; padding: 10px; font-size: 12px; color: #888;">
      This is an automated message. Please do not reply.
    </div>
  </div>
</body>
</html>

`;


module.exports={
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE
}