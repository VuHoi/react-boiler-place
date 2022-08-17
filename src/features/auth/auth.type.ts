export type UserRole = {
  code: "admin" | "user";
  name: "admin" | "user";
  id: string;
};
export type UserStatus = "active" | "inactive";
export type Gender = "male" | "female" | "other";

export interface UserResponse {
  // User ID
  id: string;
  // Full name
  name: string;
  // Email
  email: string;
  // Email verified
  email_verified: boolean;
  // Phone number (e.g. +84909******)
  phone: string;
  // User roles (e.g. ["user", "admin"])
  role: UserRole;
  // User avatar
  picture?: string;
  // Gender
  gender?: Gender;
  // Date of birth (E.g. 1990-01-31)
  dob?: string;
  // Status
  status: UserStatus;
  // Date and time user was created
  created_at: string;
  // Date and time user was last updated
  updated_at: string;
}

export interface BearerTokens {
  token_type: "bearer";
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_expires_in: number;
}

export type SignInInput = {
  username: string;
  password: string;
  rememberMe: boolean;
};

export type SignUpInput = {
  name: string;
  email: string;
  password: string;
};

export type SignInResponse = {
  user: UserResponse;
  tokens: BearerTokens;
};

export type SignUpResponse = {
  user: SignInResponse;
};
