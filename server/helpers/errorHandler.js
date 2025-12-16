function errorHandler(err, req, res, next) {
  // console.log(err, "cobain");
  let status = err.status || 500;
  let message = err.message || "Internal Server Error";
  switch (err.name) {
    case "SequelizeValidationError":
    case "SequelizeConstraintError":
      status = 400;
      message = err.errors[0].message;
      break;
    case "errorNotFound":
      status = 404;
      message = "Error Not Found";
      break;
    case "InvalidToken":
    case "JsonWebTokenError":
      status = 401;
      message = "Invalid Token";
      break;
    case "Unauthenticated":
      status = 401;
      message = "Unauthenticated";
      break;
    case "Unauthorized":
      status = 401;
      message = "Unauthorized";
      break;
    case "archiveRelationNotFound":
      status = 404;
      message = "Archive Relation Not Found";
      break;
    case "fileNotFound":
      status = 404;
      message = "File Not Found";
      break;
    case "DataNotFound":
      status = 404;
      message = "Data Not Found";
      break;
    case "FileNotFound":
      status = 404;
      message = "File Not Found";
      break;
    case "inboxNotFound":
      status = 404;
      message = "Inbox Not Found";
      break;
    case "dispositionNotFound":
      status = 404;
      message = "Disposition Not Found";
      break;
    case "institutionNotFound":
      status = 404;
      message = "Institution Not Found";
      break;
    case "NothingDataWithThisStatus":
      status = 404;
      message = "Nothing Data With This Status";
      break;
    case "outboxNotFound":
      status = 404;
      message = "Outbox Not Found";
      break;
      case "scheduleNotFound":
        status = 404;
        message = "Schedule Not Found";
        break;
    case "positionNotFound":
      status = 404;
      message = "Position Not Found";
      break;
    case "PositionInUse":
      status = 400;
      message = "Position In Use";
      break;
    case "FormatNotFound":
      status = 404;
      message = "Format Not Found";
      break;
    case "userNotFound":
      status = 404;
      message = "User Not Found";
      break;
    case "userFormatNotFound":
      status = 404;
      message = "User Format Not Found";
      break;
    case "badRequest":
      status = 400;
      message = "Bad Request";
      break;
    case "EmailNotSent":
      status = 500;
      message = "Email Not Sent";
      break;
    case "EmailSent":
      status = 200;
      message = "Email Sent";
      break;
    case "InstitutionCannotBeDeleted":
      status = 400;
      message = "Institution Cannot Be Deleted";
      break;
    case "PositionCannotBeDeleted":
      status = 400;
      message = "Position Cannot Be Deleted";
      break;
    case "UserCreatedNotFound":
      status = 404;
      message = "User Created Not Found";
      break;
    case "UserAdminNotFound":
      status = 404;
      message = "User Admin Not Found";
      break;
    case "LoginFailed":
      status = 400;
      message = "Unable to log in. Please verify your details.";
      break;
    case "userAlreadyExist":
      status = 400;
      message = "User already exist";
      break;
    case "OutboxHasBeenApproved":
      status = 400;
      message = "Outbox has been approved";
      break;
      case "AlreadyJoin":
        status = 400;
        message = "Already Join";
        break;
    default:
      //   status: 500;
      //   message: "Internal Server Error";
      break;
  }
  console.log(message,'ini error message')
  res.status(status).json({ message });
}

module.exports = errorHandler;
