export type PasswordResetKey = {
  type: "pwReset";
  key: string;
  for: string;
  exp: number;
};

export type EmailVerificationKey = {
  type: "emailVerification";
  key: string;
  for: string;
  exp: number;
};

export type EmailChangeConfirmationKey = {
  type: "emailChange";
  key: string;
  newEmail: string;
  for: string;
  exp: number;
};

export type Notification = {
  id: string;
  type: "system" | "friend" | "user" | "other";
  sender: string | null; // user ID or null if not applicable
  recipient: string; // user ID
  timestamp: number;
  read: boolean;
  title: string;
  content: string;
  url: string | null;
};

export type APILog = {
  _id: string;
  timestamp: Date;
  level: "error" | "warn" | "info" | "http" | "verbose" | "debug" | "silly";
  message: string;
  metadata: {
    timestamp?: number;
    category?:
      | "startup"
      | "requests"
      | "database"
      | "endpoint"
      | "auth"
      | "email"
      | "job";
  };
};
