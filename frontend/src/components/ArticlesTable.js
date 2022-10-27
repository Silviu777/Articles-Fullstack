import React from 'react'
import BootstrapTable from "react-bootstrap-table-next";
import {useEffect, useState} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'



function ArticlesTable() {

  useEffect( () => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([])

  const fetchItems = async () => {
    const data = await fetch("http://localhost:5000/articles", {method: 'GET'});
    const items = await data.json();
    setItems(items);
  };

 async function deleteArticle(articlesList, id){

       await fetch("http://localhost:5000/articles/" + articlesList[id]._id, 
              {method: 'DELETE'})
                  .catch(err => alert("There was an error in deleting this article!"));
       
     window.location.reload(false);
  }
    const articles = [] 

      for(var index=0; index < items.length; index++){
        articles.push({number: items[index].Article_no, description: items[index].Article_short_description, date: items[index].Article_date.slice(0,10) })
      }

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
                    <button type="button" class="btn btn-success"><i class="bi bi-pencil-square"></i></button>
                    <button type="button" class="btn btn-warning"><i class="bi bi-key-fill"></i></button>
                    <button  type="button" class="btn btn-danger" onClick={() => deleteArticle(items, rowIndex)}><i class="bi bi-trash-fill"></i></button>
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