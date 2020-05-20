import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
  // transactions: [
  //   { id: 1, name: "Einkaufen", amount: -100 },
  //   { id: 2, name: "Honorar", amount: 300 },
  //   { id: 3, name: "Bibliothek Jahresgebühr", amount: -12 },
  //   { id: 4, name: "Kurs", amount: 150 },
  // ],
  transactions: [],
  error: null,
  loading: true,
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions: GET = to fetch data from backend mongoDB Atlas server
  // axios returns a promise, so request has to be made with async/await
  async function getTransactions() {
    try {
      const res = await axios.get("/api/v1/transactions");
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  //   Actions: delete only from frontend
  // function deleteTransaction(id) {
  //   dispatch({
  //     type: "DELETE_TRANSACTION",
  //     payload: id,
  //   });
  // }

  // Actions: delete from backend

  async function deleteTransaction(id) {
    try {
      await axios.delete(`/api/v1/transactions/${id}`);
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  //   Actions: add transaction only in frontend
  // function addTransaction(transaction) {
  //   dispatch({
  //     type: "ADD_TRANSACTION",
  //     payload: transaction,
  //   });
  // }

  // Actions: add transaction to DB
  async function addTransaction(transaction) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        `/api/v1/transactions/`,
        transaction,
        config
      );
      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error,
      });
    }

    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        loading: state.loading,
        error: state.error,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
