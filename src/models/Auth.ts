import { MovieDetails } from "./Movie";

export interface AuthForm {
  email: string;
  password: string;
  username: string
  docId: string
  bookmarks?: MovieDetails[]
}

export interface AuthDto {
  accessToken: string;
  email: string
  uid: string
  currentUser: {
    displayName: string | null;
    email: string;
    emailVerified: boolean;
    isAnonymous: boolean;
    stsTokenManager: {
      refreshToken: string;
      accessToken: string;
      expirationTime: number;
    };
    tenantId: string | null;
    uid: string;
  };
}
