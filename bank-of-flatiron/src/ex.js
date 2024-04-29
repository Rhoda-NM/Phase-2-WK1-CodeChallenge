<div>
            

const columns = [
    {
        name: "Date",
        selector: row => row.date,
        sortable: true
    
    },
    {
        name: "Description",
        selector: row => row.description,
        sortable: true
    },
    {
        name: "Category",
        selector: row => row.category,
        sortable: true
    },
    {
        name: "Amount",
        selector: row => row.amount,
        sortable: true
    }
];
<div>
            <DataTable 
                columns={columns}
                data={data}
            />
        </div>