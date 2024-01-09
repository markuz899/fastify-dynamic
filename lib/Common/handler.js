const API_ERROR = (exports.API_ERROR = {
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  VALIDATION_ERROR: "VALIDATION_ERROR",
  AUTH_FAILED: "AUTH_FAILED",
  DOCUMENT_NOT_FOUND: "DOCUMENT_NOT_FOUND",
  DOCUMENT_ALREDY_EXIST: "DOCUMENT_NOT_FOUND",
});

const API_ERROR_MESSAGE = {
  [API_ERROR.INTERNAL_SERVER_ERROR]: "Internal server error",
  [API_ERROR.VALIDATION_ERROR]: "Validation error",
  [API_ERROR.AUTH_FAILED]: "Autenticazione fallita",
  [API_ERROR.DOCUMENT_NOT_FOUND]: "Document not found",
  [API_ERROR.DOCUMENT_ALREDY_EXIST]: "Document alredy exist",
};

exports.sendApiError = (reply, { code, message, status } = {}) => {
  code = code || API_ERROR.VALIDATION_ERROR;
  message = message || API_ERROR_MESSAGE[code];
  status = status || 400;

  reply.code(status).send({
    code,
    message,
    status,
  });
};
