import { createContext, ReactNode, useLayoutEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";
import { getFirestore, doc, setDoc  } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Alert } from "react-native";

interface AuthContextProps {
  user: User | undefined;
  loadingAuth: boolean;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
  createAccount(email: string, password: string): Promise<void>;
  supplementaryData(
    name: string,
    age: number,
    ultrasoundDate: Date,
    menstruationDate: Date
  ):  Promise<void>;
}

const AuthContext = createContext({} as AuthContextProps);

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  uid: string;
  email: string | null;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const [userAccount, setUserAccount] = useState<User>();

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  async function createAccount(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      setUserAccount(user);
      await AsyncStorage.setItem("@hello_mom:user", JSON.stringify(user));
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;

      Alert.alert(errorMessage);
    }
  }

  async function supplementaryData(
    name: string,
    age: number,
    ultrasoundDate: Date,
    menstruationDate: Date
  ) {
    try {
      const obj = {
        name,
        age,
        ultrasoundDate,
        menstruationDate,
      };

      await setDoc(doc(db, "users", userAccount!.uid), obj);
      setUser(userAccount);
      
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      Alert.alert(errorMessage);
    }
  }

  async function signIn(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      setUser(user);
      await AsyncStorage.setItem("@hello_mom:user", JSON.stringify(user));
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;

      Alert.alert(errorMessage);
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
        supplementaryData
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
