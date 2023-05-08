module.exports = (req, resp, next) => {
  if (req.method === "POST" && req.path === "/login") {
    if (
      req.body.username === "lance.zheng" &&
      req.body.password === "core@123"
    ) {
      return resp.status(200).json({
        user: {
          token: "this is a token",
        },
      });
    } else {
      resp.status(400).json({
        message: "incorrect username or password",
      });
    }
  }
  next();
};
