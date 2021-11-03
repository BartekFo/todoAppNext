import { createContext, FC, useContext, useEffect, useState } from 'react';
import { signInWithRedirect, signOut } from 'firebase/auth';

import { auth, provider } from '@root/firebase/clientApp';
import { AuthContextType, FirebaseUser } from '@root/@types/contextTypes';

const defaultValue = {
  user: null,
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext<AuthContextType>(defaultValue);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);

  const login = () => {
    signInWithRedirect(auth, provider);
  };

  const logout = () => {
    signOut(auth);
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
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthContext;
