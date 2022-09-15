"use strict";

function errorHandler(error, req, res, next) {
  let handler = {
    code: 500,
    message: "Internal Server Error",
  };

  switch (error.name) {
    case "SequelizeValidationError":
      handler.code = 400;
      handler.message = error.errors[0].message;
      res.status(handler.code).json({ message: handler.message });
      break;
    case "SequelizeUniqueConstraintError":
      handler.code = 400;
      handler.message = error.errors[0].message;
      res.status(handler.code).json({ message: handler.message });
      break;
    case "badRequest":
      handler.code = 400;
      handler.message = error.msg;
      res.status(handler.code).json({ message: handler.message });
      break;
    case "invalidLogin":
      handler.code = 400;
      handler.message = "Invalid email/password";
      res.status(handler.code).json({ message: handler.message });
      break;
    case "JsonWebTokenError":
      handler.code = 401;
      handler.message = "Unauthorized";
      res.status(handler.code).json({ message: handler.message });
      break;
    case "forbidden":
      handler.code = 403;
      handler.message = "Forbidden";
      res.status(handler.code).json({ message: handler.message });
      break;
    case "notFound":
      handler.code = 404;
      handler.message = error.msg;
      res.status(handler.code).json({ message: handler.message });
      break;
    case "notAllowed":
      handler.code = 405;
      handler.message = error.msg;
      res.status(handler.code).json({ message: handler.message });
      break;
    case "SequelizeDatabaseError":
    case "SequelizeForeignKeyConstraintError":
    default:
      break;
  }

  res.status(handler.code).json({ message: handler.message });
}

module.exports = errorHandler;
