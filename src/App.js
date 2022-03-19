import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState, useEffect } from 'react';

const App = () => {

  let DUMMY_EXPENSE = [];
  const onDelete = (expense) => {

    setExpenses(
      expenses.filter((e) => {
        return e !== expense;
      })
    );
    console.log(expense, "----------------->");
    console.log("Deleting");
    localStorage.setItem('expenses', JSON.stringify(expenses));
  };
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    let updateExpense = [expense, ...expenses];
    setExpenses(updateExpense);
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses])

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} onDelete={onDelete} />

    </div>
  );
}


export default App;
