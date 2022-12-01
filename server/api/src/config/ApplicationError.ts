export class ApplicationError extends Error {
  type: string | undefined;
  status: number;
  constructor(status: number, message: string, type?: string) {
    super(message);
    this.status = status;
    this.type = type;
  }
}