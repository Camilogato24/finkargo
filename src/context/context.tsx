import React, { createContext, useState, Dispatch, SetStateAction } from 'react';
import { Result } from '../interfaces';

type NullableResult = Result | undefined;

export type AppTypeState = {
  state: boolean;
  characterSelected: NullableResult;
  setState: Dispatch<SetStateAction<boolean>>;
  setCharacterSelected: Dispatch<SetStateAction<NullableResult>>;
};

const MyContext = createContext<AppTypeState>({} as AppTypeState);

interface Props {
  children: JSX.Element | JSX.Element[];
}

const MyContextProvider: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState<boolean>(false);
  const [characterSelected, setCharacterSelected] = useState<NullableResult>(undefined);

  return (
    <MyContext.Provider value={{ state, setState, characterSelected, setCharacterSelected }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
