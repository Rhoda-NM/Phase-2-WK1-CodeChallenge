import React from "react";

function Navigation() {
    return (
        <div className="nav">
            <form id="search" action="#">
                <input type="text" placeholder="Search Your Recent Transaction" />
                <button>
                    <i class="fa fa-search" style={{fontSize:"20px"}}></i>
                </button>
            </form>
        </div>
    )
}
export default Navigation;