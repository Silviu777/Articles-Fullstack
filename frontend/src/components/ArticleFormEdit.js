import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ArticleFormEdit() {

    const params = new URLSearchParams(window.location.search);
    let articleId = params.get("id")
   
     useEffect( () => {
        fetchItems();
        fetchItems2();
        
      }, []);
     
    
      const [items, setItems] = useState([])
      const [items2, setItems2] = useState([])
    
      const fetchItems = async () => {
        const data = await fetch("http://localhost:5000/categories", {method: 'GET'});
        const items = await data.json();
        setItems(items);

      };
      
      const [number, setNumber] = useState("");
      const [categoryId, setCategoryId] = useState("");
      const [description, setDescription] = useState("");
      const [source, setSource] = useState("");
      const [url, setUrl] = useState("");
      const [location, setLocation] = useState("");
      const [keywords, setKeywords] = useState("");
      const [weight, setWeight] = useState("");

      const fetchItems2 = async () => {
        const data = await fetch("http://localhost:5000/articles/"+ articleId, {method: 'GET'});
        const items2 = await data.json();
        setItems2(items2);

      };
      
    

    
      

    const [postId, setPostId] = useState(null);

   

    let handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        // let res = await fetch("http://localhost:5000/articles/" + articleId, {
        //     method: "PUT",
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify({
        //         Article_no: number,
        //         Article_categoryID: categoryId,
        //         Article_short_description: description,
        //         Article_source: source,
        //         Article_URL: url,
        //         Location: location,
        //         Article_keywords: keywords,
        //         Article_weight: weight
        //     }),
        // });
        // alert("Edited!")
        // } 
        // catch (err) {
        //     console.log("ceva nu e bine");
        // }
        // window.open("http://localhost:3000/api/articles", "_self");

        console.log("Number: "  + items2.Article_no);
        console.log("sunt in submit")
        if(number == ""){
            console.log("sunt in asaf");
        }
        else{
        
        }

    };

    return (
        <div className="App">

            <form onSubmit={handleSubmit}>
                <h2>Add / Edit Article </h2>
               
                
                    <div className='form-group'>
                    <input
                    className='form-control'
                    type="text"
                    value={items2.Article_no}
                    placeholder='Article number:'
                    onChange={(e) => {setItems2({...items2,Article_no: e.target.value})}}
                />
</div>  
                <div className='form-group'>
                <select  className='form-control' onChange={(e) => setCategoryId(e.target.value)}>
                  <option value=" --- "  > ---Selecteaza Categorie--- </option>
                  
                  {items.map((value, key) => {
                  return (
                    <option value={value._id}>
                      {value.Category_name}
                    </option>
                  );
                })}
                </select>
                </div>
                <div className='form-group'>
                <input
                    className='form-control'
                    type="text"
                    value={items2.Article_short_description}
                    placeholder="Short Description"
                    onChange={(e) => {setItems2({...items2,Article_short_description: e.target.value})}}
                />
                </div>
                <div className='form-group'>
                <input
                    className='form-control'
                    type="text"
                    value={items2.Article_source}
                    placeholder="Source"
                    onChange={(e) => {setItems2({...items2,Article_source: e.target.value})}}
                />
                </div>
                <div className='form-group'>
                <input
                    className='form-control'
                    type="text"
                    value={items2.Article_URL}
                    placeholder="URL"
                    onChange={(e) => {setItems2({...items2,Article_URL: e.target.value})}}
                />
                </div>
                <div className='form-group'>
                <input
                    className='form-control'
                    type="text"
                    value={items2.Location}
                    placeholder="Location"
                    onChange={(e) => {setItems2({...items2,Location: e.target.value})}}
                />
                </div>
                <div className='form-group'>
                <input
                    className='form-control'
                    type="text"
                    value={items2.Article_keywords}
                    placeholder="Keywords"
                    onChange={(e) => {setItems2({...items2,Article_keywords: e.target.value})}}
                />
                </div>
                <div className='form-group'>
                <input
                    className='form-control'
                    type="text"
                    value={items2.Article_weight}
                    placeholder="Weight"
                    onChange={(e) => {setItems2({...items2,Article_weight: e.target.value})}}
                />
                </div>
                <br/>
                <button className='btn btn-primary' type="submit">Save</button>
            </form>
        </div>
    );
}

export default ArticleFormEdit;
        