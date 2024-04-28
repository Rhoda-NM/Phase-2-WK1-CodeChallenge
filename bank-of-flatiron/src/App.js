import React from 'react';
import Header from './header';
import './App.css';
import Navigation from './navigation';
import TransactionList from './transactionList';

const data = [
  {id: 1,
    date: "2019-12-01",
    description: "Paycheck from Bob",
    category: "income",
    amount: 1000
  },
  {id: 2,
    date: "2019-12-06",
    description: "South by Southwest Quinoa Bowl at Fresh & co",
    category: "Food",
    amount: "-10.50"
  },
  {id: 3,
    date: "2019-12-16",
    description: "South by Southwest Quinoa Bowl at Fresh & co",
    category: "Food",
    amount: "-10.50"
  },
  {id: 4,
    date: "2019-12-07",
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
  return (
    <div className="App">
      <Header />
      <Navigation />
      <TransactionList data={data}/>
    </div>
  );
}

export default App;
