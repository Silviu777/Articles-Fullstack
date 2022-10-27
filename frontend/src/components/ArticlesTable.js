import React from 'react'
import BootstrapTable from "react-bootstrap-table-next";

import 'bootstrap/dist/css/bootstrap.min.css'

function ArticlesTable() {

    const articles = [
        { number: 1, description: "Lorem ipsum dolor sin amet", date: '10/26/22' },
        { number: 2, description: "Lorem ipsum dolor sin amet", date: '10/26/22' },
        { number: 3, description: "Lorem ipsum dolor sin amet", date: '10/26/22' },
        { number: 4, description: "Lorem ipsum dolor sin amet", date: '10/26/22' },
        { number: 5, description: "Lorem ipsum dolor sin amet", date: '10/26/22' }
      ] 
    const columns = [
        {
          dataField: "number",
          text: "Article No.",
          sort: true,
        },
        {
          dataField: "description",
          text: "Article Description",
          sort: true
        },
        {
            dataField: "date",
            text: "Article Date",
            sort: true
        },
        {
          dataField: "actions",
          text: "Actions",
          formatter: (cell, row, rowIndex) => {
            return (
                <div>
                    <button type="button" class="btn btn-primary"><i class="bi bi-eye-fill"></i></button>
                    <button type="button" class="btn btn-success"><i class="bi bi-pencil-square"></i></button>
                    <button type="button" class="btn btn-warning"><i class="bi bi-key-fill"></i></button>
                    <button type="button" class="btn btn-danger"><i class="bi bi-trash-fill"></i></button>
                </div>
            )
          }
        }
      ];

    return (
        <div className="App">
            <BootstrapTable
                keyField="id"
                data={articles}
                columns={columns}
            />
        </div>
    )
}

export default ArticlesTable;