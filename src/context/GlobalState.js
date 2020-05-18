import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [
    { id: 1, name: "Einkaufen", amount: -100 },
    { id: 2, name: "Honorar", amount: 300 },
    { id: 3, name: "Bibliothek Jahresgebühr", amount: -12 },
    { id: 4, name: "Kurs", amount: 150 },
  ],
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //   Actions: delete
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  //   Actions: add
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
