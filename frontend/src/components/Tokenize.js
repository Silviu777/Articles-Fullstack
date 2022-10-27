import React from 'react'
import {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";

function Tokenize() {

     //nav through the pages
    const navigate = useNavigate();

    const params = new URLSearchParams(window.location.search);
    const articleId = params.get("id")
    console.log("http://localhost:5000/articoles/"+ articleId);

    
   
    useEffect( () => {
        fetchItems();
      }, []);
    
      const [items, setItems] = useState([])
      const [articles, setArticles] = useState([])
      const [token, setToken] = useState(" --- ");
    
      const fetchItems = async () => {
        const data = await fetch("http://localhost:5000/tokens", {method: 'GET'});
        const items = await data.json();
        setItems(items);
      };

      async function ceva() {
        try{
        const data = await fetch("http://localhost:5000/articoles/"+ articleId, {method: 'GET'});
        const items = await data.json();
        console.log(items);
        }
        catch(err){
          console.log(err);
        }
      };

      ceva();

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
          <div className="App">
          <form onSubmit={handleSubmit}>
            <label> Listare date despre articol? ori ce tokeni contine? </label>
              <select onChange={(e) => setToken(e.target.value)}>
              <option  value=" --- "> --- </option>
              {items.map((value, key) => {
            return (
              <option value={value._id}> {value.Token_body} </option>
            );
          })}
              </select>
              <button type="submit">Adauga token</button>
            </form>
            </div>
    );
}

export default Tokenize;