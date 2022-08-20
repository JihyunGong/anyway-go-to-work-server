exports.unknownPageHandler = (req, res, next) => {
  try {
    res.send("페이지를 찾을 수 없습니다.");
  } catch (err) {
    next(err);
  }
};

exports.errorHandler = (err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.json({
    result: "error",
    error: {
      status: 500,
      message: "요청에 실패했습니다.",
    },
  });
};
