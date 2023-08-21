import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { auth } from "../config/firebase"

// Define the shape of the context value
interface AuthContextValue {
  currentUser: firebase.default.User | null;
  authenticated: boolean;
  signup: (email: string, password:string) =>  Promise<any>;
  login: () =>  void;
  logout: () => void;
}

// Define the type for the AuthProvider component's children prop
interface AuthProviderProps {
  children: ReactNode;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) { throw new Error('useAuth must be used within an AuthProvider');}
  return context;
}

// Create the context
const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: AuthProviderProps) {

  // States
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<firebase.default.User | null>(null)
  const [loading, setLoading] = useState(false)

  function signup(email: string, password: string) {
    return auth.createUserWithEmailAndPassword(email, password)
  }
  function login() {
    
  }

  function logout() {

  }
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
      
    });

    return unsubscribe;
  }, []);

  const authContextValue: AuthContextValue = {
    currentUser,
    authenticated,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}


