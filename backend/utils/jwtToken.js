export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();
  const expiresIn = process.env.COOKIE_EXPIRE || 1;
  const options = {
    expires: new Date(
      Date.now() + expiresIn * 24 * 60 * 60 * 1000
    ),
    httpOnly: true, // Set httpOnly to true
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
