import React from 'react';
import './ExpensesList.css';

import ExpenseItem from './ExpenseItem';
const ExpensesList = (props) => {
  if (props.item.length === 0) {
    return <h2 className="expenses_list__fallback">Found No Expenses</h2>;
  }
  return (
    <ul className="expenses_list">
      <li>
        {props.item.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </li>
    </ul>
  );
};
export default ExpensesList;
