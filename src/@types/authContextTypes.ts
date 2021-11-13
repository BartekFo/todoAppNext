export type AuthContextType = {
  user: {
    uid: string;
  } | null;
  login: () => void;
  logout: () => void;
};
