import { ChangeEvent } from "react";

export interface IUser {
     username: string
}

export interface IUsers {
     users: IUser[]
}

export interface AuthFormProps {
     formName: string,
     OnSubmitHandler(e: any): void,
     OnChangeName?(e: ChangeEvent<HTMLInputElement>): void,
}