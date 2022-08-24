import { createContext, ReactNode, useLayoutEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

interface AuthContextProps {
  user: User | undefined;
  loadingAuth: boolean;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
  createAccount(email: string, password: string): Promise<void>;
}

const AuthContext = createContext({} as AuthContextProps);

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  email: string | null;
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

      setUser(user);
      await AsyncStorage.setItem("@hello_mom:user", JSON.stringify(user));
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
      console.log(user);

      setUser(user);
      await AsyncStorage.setItem("@hello_mom:user", JSON.stringify(user));
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorMessage);
    }
  }

  async function signOut() {
    await AsyncStorage.removeItem("@hello_mom:user");
    setUser(undefined);
  }

  async function reloadAuth() {
    const userItem = await AsyncStorage.getItem("@hello_mom:user");
    const user = userItem != null ? JSON.parse(userItem) : undefined;

    setUser(user);
  }

  useLayoutEffect(() => {
    reloadAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loadingAuth: !!user,
        signIn,
        signOut,
        createAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
