import React, { useState } from 'react';

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {

  return (
    <>
      <Card className="expense-item">
        <div className="expense-description">
          <ExpenseDate expenseDate={props.expenseDate}/>
          <div className="expense-name">
            <h2>{props.expenseName}</h2>
          </div>
        </div>
        <div className="expense-description">
          <Card className="expense-price">&#8377; {props.expensePrice}</Card>
        </div>
      </Card>
    </>
  );
}

export default ExpenseItem;
