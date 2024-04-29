import React from "react";
import DataTable from 'react-data-table-component';
import './App.css';
 
function TransactionList({data}) {
    
    return(
        <>
        <div class="transactionList">
            <table>
                <thead>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </thead>
                <tbody>
                    {data.map((transaction) => (
                        <tr>
                            <td>{transaction.date}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
        </>
    )
}

export default TransactionList;