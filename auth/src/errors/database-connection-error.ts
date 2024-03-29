import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
  statusCode: number = 500;
  reason: string = "Error while connecting to DB!";
  constructor() {
    super("Error while connecting to DB!");

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
