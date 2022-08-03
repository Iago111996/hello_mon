
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useLocalStorage = (keyName: string, defaultValue: string | null) => {
    const [storedValue, setStoredValue] = useState(async () => {
      try {
        const value = await AsyncStorage.getItem(keyName);
  
        if (value) {
          return JSON.parse(value);
        } else {
            await  AsyncStorage.setItem(keyName, JSON.stringify(defaultValue));
          return defaultValue;
        }
      } catch (err) {
        return defaultValue;
      }
    });
  
    const setValue = async (newValue: any) => {
      try {
        await AsyncStorage.setItem(keyName, JSON.stringify(newValue));
      } catch (err) {}
      setStoredValue(newValue);
    };
  
    return [storedValue, setValue];
  };