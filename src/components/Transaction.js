import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = (props) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const { name, amount, id } = props.transaction;
  const sign = amount < 0 ? "-" : "+";
  //   Math.abs() to make absolute number
  return (
    //   change border colour red or green depending on the amount + or -
    <li className={amount < 0 ? "minus" : "plus"}>
      {name}{" "}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button className="delete-btn" onClick={() => deleteTransaction(id)}>
        x
      </button>
    </li>
  );
};
