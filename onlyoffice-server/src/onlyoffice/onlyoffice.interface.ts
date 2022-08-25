enum ErrorCode {
  NoError = 0,
  NoSecret = 1,
  ErrorCallbackUrl = 2,
  ServerError = 3,
  NoChange = 4,
  ErrorCommand = 5,
  InvalidToken = 6,
}
export interface IOnlyofficeCommand {
  error: ErrorCode;
}

export interface IOnlyofficeForceSave {
  c?: string;
  key?: string;
  userdata?: string;
  token?: string;
}
