import { createContext, ReactNode, useState } from "react";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

interface AuthContextProps {
  user: any;
  loadingAuth: boolean;
  signIn(email: string, password: string): Promise<void>;
  createAccount(email: string, password: string): Promise<void>;
}

const AuthContext = createContext({} as AuthContextProps);

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  email: string;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  async function createAccount(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("conta criada!");
      const user = userCredential.user;

      
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  }

  async function signIn(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("logou!");
      const user = userCredential.user;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loadingAuth: !!user,
        signIn,
        createAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
