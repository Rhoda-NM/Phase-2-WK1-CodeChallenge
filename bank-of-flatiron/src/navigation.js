import React from "react";

function Navigation({handleSearch}) {
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
                <input type="text" placeholder="Date" />
                <input type="text" placeholder="Date" />
                <input type="text" placeholder="Date" />
                <input type="text" placeholder="Date" />
            </form>
            <div>
                <button>Add Transaction</button>
            </div>
        </div>
        </>
    )
}
export default Navigation;