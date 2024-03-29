export enum UserActionTypes {
  GOOGLE_SIGN_IN_START = "GOOGLE_SIGN_IN_START",
  EMAIL_SIGN_IN_START = "EMAIL_SIGN_IN_START",
  SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS",
  SIGN_IN_FAILURE = "SIGN_IN_FAILURE",
  CHECK_USER_SESSION = "CHECK_USER_SESSION",
  SIGN_OUT_START = "SIGN_OUT_START",
  SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS",
  SIGN_OUT_FAILURE = "SIGN_OUT_FAILURE",
  SIGN_UP_START = "SIGN_UP_START",
  SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS",
  SIGN_UP_FAILURE = "SIGN_UP_FAILURE",
}

export interface IUser {
  id: string;
  displayName: string;
  createdAt?: {
    seconds: number;
    nanoseconds: number;
  };
  email: string;
}

export interface IUserGoogleSignInStart {
  type: UserActionTypes.GOOGLE_SIGN_IN_START;
}

export interface IUserSignInSuccess {
  type: UserActionTypes.SIGN_IN_SUCCESS;
  payload: IUser;
}

export interface IUserSignInFailure {
  type: UserActionTypes.SIGN_IN_FAILURE;
  payload: string;
}

export interface IUserEmailSignInStart {
  type: UserActionTypes.EMAIL_SIGN_IN_START;
  payload: {
    email: string;
    password: string;
  };
}

export interface IUserCheckUserSession {
  type: UserActionTypes.CHECK_USER_SESSION;
}

export interface IUserSignOutStart {
  type: UserActionTypes.SIGN_OUT_START;
}

export interface IUserSignOutSuccess {
  type: UserActionTypes.SIGN_OUT_SUCCESS;
}

export interface IUserSignOutFailure {
  type: UserActionTypes.SIGN_OUT_FAILURE;
  payload: string;
}

export interface IUserSignUpStart {
  type: UserActionTypes.SIGN_UP_START;
  payload: {
    email: string;
    password: string;
    displayName: string;
  };
}

export interface IUserSignUpSuccess {
  type: UserActionTypes.SIGN_UP_SUCCESS;
  payload: {
    user: IUser;
    additionalData: any;
  };
}

export interface IUserSignUpFailure {
  type: UserActionTypes.SIGN_UP_FAILURE;
  payload: string;
}

export type UserActions =
  | IUserGoogleSignInStart
  | IUserEmailSignInStart
  | IUserSignInSuccess
  | IUserSignInFailure
  | IUserCheckUserSession
  | IUserSignOutStart
  | IUserSignOutSuccess
  | IUserSignOutFailure
  | IUserSignUpStart
  | IUserSignUpSuccess
  | IUserSignUpFailure;

export interface IUserState {
  readonly currentUser: IUser | null;
  readonly error: string;
}
