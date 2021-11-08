import { ChangeEvent, Dispatch } from "react";

export interface IUser {
     username: string
};

export interface IUsers {
     users: IUser[]
};

export interface IAuthFormProps {
     formName: string,
     OnSubmitHandler(e: ChangeEvent<HTMLFormElement>): void,
     OnChangeName?(e: ChangeEvent<HTMLInputElement>): void,
};

export interface ICharacterSearchProps {
     onSubmitHandler(e: ChangeEvent<HTMLFormElement>): void;
};


export interface ICustomPaginationProps {
     onClickNext(): void,
     onClickPrev(): void,
};

export interface ICharacterProps {
     character: {
          id: string,
          name: string,
          gender: string,
          status: string,
          species: string,
          origin: {
               name: string,
          },
          location: {
               name: string,
          },
          image: string
     }
};

export interface IEpisodeProps {
     episode: {
          name: string,
          air_date: string,
     }
};

export interface ILocationProps {
     location: {
          id:string,
          name: string,
          type: string,
          dimension: string
     }
};
