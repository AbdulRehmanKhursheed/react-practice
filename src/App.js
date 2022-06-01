import { useState } from "react";
import "./App.css";
import ExpenseItem from "./components/ExpenseItems";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/ExpenseFilter";
import Chart from "./components/Chart/Chart";
const init_expenses = [
  {
    id: 1,
    title: "item1",
    amount: 248.46,
    date: new Date(),
  },
  {
    id: 2,
    title: "item2",
    amount: 120.46,
    date: new Date(),
  },
  {
    id: 3,
    title: "item3",
    amount: 154.46,
    date: new Date("July 20, 2020"),
  },
  {
    id: 4,
    title: "item4",
    amount: 120.46,
    date: new Date("July 21, 2020"),
  },
  {
    id: 5,
    title: "item5",
    amount: 80.46,
    date: new Date("March 21, 2020"),
  },
  {
    id: 6,
    title: "item6",
    amount: 60.23,
    date: new Date("January 21, 2020"),
  },
];
// ******************************* App function starts
function App() {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [expenseArray, setExpenseArray] = useState(init_expenses);
  const chartDataPoints=[
    { label:'Jan' , value: 0},
    { label:'Feb' , value: 0},
    { label:'Mar' , value: 0},
    { label:'Apr' , value: 0},
    { label:'May' , value: 0},
    { label:'Jun' , value: 0},
    { label:'Jul' , value: 0},
    { label:'Aug' , value: 0},
    { label:'Sep' , value: 0},
    { label:'Oct' , value: 0},
    { label:'Nov' , value: 0},
    { label:'Dec' , value: 0},
  ]
 
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenseArray.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  for (const expense of filteredExpenses){
    const expenseMonth=expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  let expensesContent = (
    <h2 className="expenses-list__fallback">No expenses found.</h2>
  );

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        name={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  const onGettingNewExpense = (val) => {
    let body = {
      ...val,
      date: new Date("July 21, 2021 01:15:00"),
    };
    setExpenseArray((prevExpenses) => {
      return [body, ...prevExpenses];
    });
  };

  return (
    <div className="expenses">
      <NewExpense someProperty={onGettingNewExpense} />
      <Chart dataPoints={chartDataPoints} />
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <div className="expenses-list">{expensesContent}</div>
    </div>
  );
}

export default App;
