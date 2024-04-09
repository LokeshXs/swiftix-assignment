'use client';

import { Dispatch, SetStateAction, createContext, useState } from "react";

type StateType = {
  isOpen: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>
};
const initState: StateType = {
  isOpen: false,
  setOpen: ()=>{}
};

export const MobileNavContext = createContext<StateType>(initState);

const MobileNavContextProvider = ({children}) => {
  const [isOpen, setOpen] = useState(false);


  return (
    <MobileNavContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </MobileNavContext.Provider>
  )
}

export default MobileNavContextProvider;