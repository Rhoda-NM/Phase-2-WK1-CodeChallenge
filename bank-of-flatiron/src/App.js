import React, { useState } from 'react';
import Header from './header';
import './App.css';
import Navigation from './navigation';
import TransactionList from './transactionList';

//Declaring an array of objects
const data = [
  {id: 1,
    date: "2024-04-01",
    description: "Paycheck from Bob",
    category: "income",
    amount: 1000
  },
  {id: 2,
    date: "2024-04-06",
    description: "South by Southwest Quinoa Bowl at Fresh & co",
    category: "Food",
    amount: "-10.50"
  },
  {id: 3,
    date: "2024-04-16",
    description: "South by Southwest Quinoa Bowl at Fresh & co",
    category: "Food",
    amount: "-10.50"
  },
  {id: 4,
    date: "2024-04-07",
    description: "Sunglasses by Urban Outfitters",
    category: "Fashion",
    amount: "-24.99"
  },
  {id: 5,
    date: "2019-12-09",
    description: "Chipotle",
    category: "Food",
    amount: "-15.50"
  }
];
function App() {
  const[transactionData, setTransactionData] = useState(data); //Set the state of our transaction data used for displaying table
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(""); //set state of the amount entered on input field
  const [date, setDate] = useState(new Date());

  const handleDate = (newDate) => setDate(newDate)
  const addAmount = (event) => setAmount(event.target.value);
  const addCategory = (event) => setCategory(event.target.value);
  const addDescription = (event) => setDescription(event.target.value);
 //console.log(date.toISOString());
 const addedTransaction = {
  id: data.length + 1,
  date: date.toISOString().slice(0, 10),
  description: description,
  category: category,
  amount: amount
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    data.push(addedTransaction);
    const newList = [...data]
    //console.log(addedTransaction)
    setTransactionData(newList);
  }
  //Function that handles search as a callback function
  function handleSearchChange(event) {
    const searchResult = data.filter((transaction) => (
      transaction.description.toLowerCase().includes(event.target.value.toLowerCase())
    ));
    setTransactionData(searchResult); //sets transaction data as the result of search function

  }

  //Function that handles submitting the add transaction form
  return (
    <div className="App">
      <Header />
      <Navigation handleSearch={handleSearchChange} 
        handleSubmit={handleSubmit}
        addAmount={addAmount}
        addCategory={addCategory}
        addDescription={addDescription}
        date={date}
        handleDate={handleDate}
      />
      <TransactionList data={transactionData}/>
    </div>
  );
}

export default App;
