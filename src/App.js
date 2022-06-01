import { useState } from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItems';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  const expenses=[
    {
      title:"item1",
      amount:248.46,
      date:new Date()
    },
    {
      title:"item2",
      amount:120.46,
      date:new Date()
    }
  ]
  const [expenseArray, setExpenseArray]=useState(expenses)
  const onGettingNewExpense=(val)=>{
    let body={
      ...val,
      date:new Date()
    }
    expenses.push(body);
    console.log(expenses);
    console.log(expenseArray);
    setExpenseArray(expenses)
  }
  return (
    <div  className="expenses">
      <NewExpense someProperty={onGettingNewExpense}/>
       {expenseArray.map((value, index) => {
        return <ExpenseItem name={expenseArray[index].title} date={expenseArray[index].date} amount={expenseArray[index].amount}></ExpenseItem>
      })}
      
    </div>
  );
}

export default App;
