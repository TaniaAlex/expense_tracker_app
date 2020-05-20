import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "../components/Transaction";

export const TransactionList = () => {
  // const context = useContext(GlobalContext);
  const { transactions, getTransactions } = useContext(GlobalContext);
  // console.log(transactions);

  // make http request from a component use useEffect()
  useEffect(() => {
    getTransactions();
    // the line under, will stop warning in console and prevent infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction._id} />
        ))}
      </ul>
    </>
  );
};
