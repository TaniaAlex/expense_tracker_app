import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

export const Transaction = (props) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const { name, amount, _id } = props.transaction;
  const sign = amount < 0 ? "-" : "+";
  //   Math.abs() to make absolute number
  return (
    //   change border colour red or green depending on the amount + or -
    <li className={amount < 0 ? "minus" : "plus"}>
      {name}{" "}
      <span>
        {sign}${numberWithCommas(Math.abs(amount))}
      </span>
      <button className="delete-btn" onClick={() => deleteTransaction(_id)}>
        x
      </button>
    </li>
  );
};
