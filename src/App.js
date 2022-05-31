import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItems';
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
  return (
    <div  className="expenses">
       {expenses.map((value, index) => {
        return <ExpenseItem name={expenses[index].title} date={expenses[index].date} amount={expenses[index].amount}></ExpenseItem>
      })}
      
    </div>
  );
}

export default App;
