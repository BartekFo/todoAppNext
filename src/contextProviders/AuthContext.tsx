import { createContext, FC, useContext, useEffect, useState } from 'react';
import { signInWithRedirect } from 'firebase/auth';

import { auth, provider } from '@root/firebase/clientApp';
import firebase from 'firebase/compat';

type AuthContextType = {
  user: firebase.User | null;
  login: () => void;
};

const AuthContext = createContext<AuthContextType>({ user: null, login: () => {} });

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  const login = () => {
    signInWithRedirect(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      // @ts-ignore
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthContext;
