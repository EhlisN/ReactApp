import { createContext, Dispatch, SetStateAction } from 'react';

const MyContext = createContext({} as IAuth);

export default MyContext;

interface IAuth {
  isLoginUser: boolean;
  setIsLoginUser: Dispatch<SetStateAction<boolean>>;
}
