import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../config/firebase';
import { User } from 'firebase/auth';


// Define the shape of the context value
interface AuthContextValue {
  currentUser: User | null;
  isAuthenticated: boolean;
  signup: (email: string, password:string) =>  Promise<any>;
  login: (email: string, password:string) =>  Promise<any>;
  logout: () => Promise<any>;
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
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState< User | null>(null)
  const [loading, setLoading] = useState(false)

  function signup(email: string, password: string) { return createUserWithEmailAndPassword(auth, email, password) }
  function login(email: string, password: string) { return signInWithEmailAndPassword(auth, email, password)}
  function logout() {return signOut(auth) }
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      setCurrentUser(user);
      setLoading(false);
      setAuthenticated(!!user)
    });
    
    return unsubscribe;
  }, []);

  const authContextValue: AuthContextValue = {
    currentUser,
    isAuthenticated,
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


