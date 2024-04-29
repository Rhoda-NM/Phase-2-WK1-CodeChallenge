import React, { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import './App.css';

function Navigation({handleSearch}) {
    const [date, setDate] = useState(new Date());
    return (
        <>
        <div className="nav">
            <form id="search" action="#">
                <input onChange={handleSearch} type="text" placeholder="Search Your Recent Transaction" />
                <button>
                    <i class="fa fa-search" style={{fontSize:"20px"}}></i>
                </button>
            </form>
        </div>
        <div className="addTransaction">
            <form>
                <label>Date</label>
                <DatePicker 
                    selected={date} 
                    onChange={(date) => setDate(date)}
                />
                <input type="text" placeholder="Description" />
                <input type="text" placeholder="Category" />
                <input type="text" placeholder="Amount" />
            </form>
            <div id="btn">
                <button>Add Transaction</button>
            </div>
        </div>
        </>
    )
}
export default Navigation;