import React, { useContext, useReducer } from 'react'

export const StateContext= React.createContext();

export const StateProvider = ({initialValue , reducer , children }) => ( 
  <StateContext.Provider value={useReducer(reducer,initialValue)}>
    {children}
  </StateContext.Provider>
);

export const useProvider = () => useContext(StateContext)