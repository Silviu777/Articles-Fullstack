import React from 'react'
import {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import './table.css'

function Tokenize() {

     //nav through the pages
    const navigate = useNavigate();

    const params = new URLSearchParams(window.location.search);
    const articleId = params.get("id")
    console.log("http://localhost:5000/articoles/"+ articleId);

    
   
    useEffect( () => {
        fetchItems();
        fetchItems2();
      }, []);
    
      const [items, setItems] = useState([])
      const [items2, setItems2] = useState([])
      const [articles, setArticles] = useState([])
      const [token, setToken] = useState(" --- ");
    
      const fetchItems = async () => {
        const data = await fetch("http://localhost:5000/tokens", {method: 'GET'});
        const items = await data.json();
        setItems(items);
      };

      const fetchItems2 = async () => {
        const data = await fetch("http://localhost:5000/articles/"+ articleId, {method: 'GET'});
        const items2 = await data.json();
        setItems2(items2);
        
      };

   

      let handleSubmit = async (e) => {
        e.preventDefault();
        if(token == " --- "){
            alert("Select a token first!");
        }else{
        
        
        try {
            let res = await fetch("http://localhost:5000/articles/" + articleId , {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    token: token,
                }),
            });
            alert("Added!");
            
            } 
            catch (err) {
                console.log("Can't add token!");
                alert("Error adding token!");
            }
            navigate("../api/articles");
        }

      }
      

    return (
          <div className="App" class="text-center">
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
            <label className='form-control'> {JSON.stringify(items2.Article_tokensIDs)}
             </label>
            </div >
            <br></br>
            <div className='form-group' >
              <select className='form-control' onChange={(e) => setToken(e.target.value)}>
              <option  value=" --- "> ---Select Token--- </option>
              {items.map((value, key) => {
            return (
              <option value={value._id}> {value.Token_body} </option>
            );
          })}
              </select>
              </div>
              <br/>
              <div class="text-center">
              <button   className='btn btn-primary' class="addTokenBtn" type="submit">Add Token</button>
              </div>
            </form>
            </div>
    );
}

export default Tokenize;