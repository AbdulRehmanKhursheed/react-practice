import { useState } from "react";
import "./App.css";
import ExpenseItem from "./components/ExpenseItems";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/ExpenseFilter";
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
];
function App() {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [expenseArray, setExpenseArray] = useState(init_expenses);
  const [expenseTempArray, setTempExpenseArray] = useState(expenseArray);
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(filteredYear);
    // setTempExpenseArray((prevExpenses) => {
    //   return [...expenseArray];
    // });

    setTempExpenseArray((expenseArray) => {
      expenseArray.filter((el) => {});
      let filteredArray = expenseArray.filter(function (number) {
        return number.date.getFullYear() == selectedYear;
      });
      console.log(filteredArray);
      return [...filteredArray];
    });
    console.log(expenseTempArray);
  };

  const onGettingNewExpense = (val) => {
    let body = {
      ...val,
      date: new Date(),
    };
    setExpenseArray((prevExpenses) => {
      return [body, ...prevExpenses];
    });
    setTempExpenseArray((prevExpenses) => {
      return [body, ...prevExpenses];
    });
  };
  return (
    <div className="expenses">
      <NewExpense someProperty={onGettingNewExpense} />
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {expenseTempArray.map((value, index) => {
        return (
          <ExpenseItem
            name={expenseTempArray[index].title}
            key={value.id}
            date={expenseTempArray[index].date}
            amount={expenseTempArray[index].amount}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}

export default App;
