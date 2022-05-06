import React, {createContext, useState, useEffect, useContext} from 'react';

const SwitchContext = createContext({});

const SwitchContextProvider = ({children}) => {
  const [buyer, setBuyer] = useState(true);

  return (
    <SwitchContext.Provider
      value={{
        setBuyer,
        buyer,
      }}>
      {children}
    </SwitchContext.Provider>
  );
};
export default SwitchContextProvider;

export const useSwitchContext = () => useContext(SwitchContext);
