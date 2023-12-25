module.exports = function (err) {
  let error = {
    error: true,
    statusCode: 500,
    message: "Internal Server Error",
  };

  if (err.name == "Unauthorized" || err.code == 401) {
    error.statusCode = 401;
    error.message = `${err.message}`;
  }

  if (err.code && err.code == 11000) {
    error.statusCode = 400;
    error.message = `${err.message}`;
  }

  if (err.name == "CustomError") {
    error.message = `${err.message}`;
  }

  if (err.name == "ValidationError") {
    error.statusCode = 400;
    error.message = `${err.message}`;
  }

  if (err.name == "ValidatorError") {
    error.statusCode = 400;
    error.message = `${err.message}`;
  }

  if (err.name == "CastError") {
    error.statusCode = 400;
    error.message = `${err.value} not valid field ${err.path}`;
  }

  if (err.name == "DocumentNotFoundError") {
    error.statusCode = 404;
    error.message = `${err.message}`;
  }

  if (err.name == "DataTypesError") {
    error.statusCode = 400;
    error.message = `${err.message}`;
  }

  if (err.errors && typeof err.errors === "object") {
    error.message = "";
    for (const singlErr in err.errors) {
      if (err.errors[singlErr] && err.errors[singlErr].message)
        error.message = `${error.message} ${err.errors[singlErr].message};\n`;
    }
  }

  return error;
};
