import firebase from 'firebase/compat';

export type AuthContextType = {
  user: firebase.User | null;
  login: () => void;
  logout: () => void;
};

export type FirebaseUser = firebase.User;
