import { createContext } from "react";
import { IUser } from "../interfaces/interfaces";

export const AuthContext = createContext<IUser | null >(null);