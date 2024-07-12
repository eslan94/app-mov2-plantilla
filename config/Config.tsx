import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase} from "firebase/database";

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyB0WwgrbhZfK3_WGTYH7wk-dQg--lU4BrQ",
  authDomain: "app-one-8c953.firebaseapp.com",
  databaseURL: "https://app-one-8c953-default-rtdb.firebaseio.com",
  projectId: "app-one-8c953",
  storageBucket: "app-one-8c953.appspot.com",
  messagingSenderId: "413837160448",
  appId: "1:413837160448:web:bf5350a5c50dda705ba8e5"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
//export const auth = getAuth(app);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});