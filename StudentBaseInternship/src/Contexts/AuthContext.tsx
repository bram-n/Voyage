import React, { createContext, useContext, useState, ReactNode } from 'react';
import { auth } from "../config/firebase"
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// Define the shape of the context value
interface AuthContextValue {
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
  const [authenticated, setAuthenticated] = useState(false);

  function signup(email: string, password: string) {
    return auth.createUserWithEmailAndPassword(email, password)
  }
  function login() {
    
  }

  function logout() {

  }

  const authContextValue: AuthContextValue = {
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


