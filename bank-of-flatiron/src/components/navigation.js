import React from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import './App.css';

function Navigation({handleSearch, handleSubmit, addAmount, addCategory, addDescription, date, handleDate, amount, description, category}) {
    return (
        <>
        <header>
            <h1>The Royal Bank of Flatiron</h1>
        </header>
        <div className="nav"> 
            <form id="search" action="#">
                <input onChange={handleSearch} type="text" placeholder="Search Your Recent Transaction" />
                <button>
                    <i class="fa fa-search" style={{fontSize:"20px"}}></i>
                </button>
            </form>
        </div>
        <div className="addTransaction">
            <form onSubmit={handleSubmit}>
                <label>Date</label>
                <DatePicker 
                    selected={date}
                    value={date} 
                    onChange={handleDate}
                />
                <input onChange={addDescription}type="text" value={description} placeholder="Description" />
                <input onChange={addCategory} type="text" value={category} placeholder="Category" />
                <input onChange={addAmount} type="text" value={amount} placeholder="Amount" />
                <button>Add Transaction</button>
            </form>
            
        </div>
        </>
    )
}
export default Navigation;