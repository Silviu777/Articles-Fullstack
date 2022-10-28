import React, { useState, useEffect } from 'react'


function ArticleForm() {

    const params = new URLSearchParams(window.location.search);
    let articleId = params.get("id")

    useEffect(() => {
        fetchItems();
    }, []);


    const [items, setItems] = useState([])


    const fetchItems = async () => {
        const data = await fetch("http://localhost:5000/categories", { method: 'GET' });
        const items = await data.json();
        setItems(items);
    };


    const [postId, setPostId] = useState(null);


    const [number, setNumber] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [description, setDescription] = useState("");
    const [source, setSource] = useState("");
    const [url, setUrl] = useState("");
    const [location, setLocation] = useState("");
    const [keywords, setKeywords] = useState("");
    const [weight, setWeight] = useState("");



    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:5000/articles", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    Article_no: number,
                    Article_categoryID: categoryId,
                    Article_short_description: description,
                    Article_source: source,
                    Article_URL: url,
                    Location: location,
                    Article_keywords: keywords,
                    Article_weight: weight
                }),
            });
            window.open("http://localhost:3000/api/articles", "_self");
        }
        catch (err) {
            console.log("ceva nu e bine");
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
                        value={number}
                        placeholder="Number"
                        onChange={(e) => setNumber(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <select className='form-control' onChange={(e) => setCategoryId(e.target.value)}>
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
                        value={description}
                        placeholder="Short Description"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type="text"
                        value={source}
                        placeholder="Source"
                        onChange={(e) => setSource(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type="text"
                        value={url}
                        placeholder="URL"
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type="text"
                        value={location}
                        placeholder="Location"
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type="text"
                        value={keywords}
                        placeholder="Keywords"
                        onChange={(e) => setKeywords(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type="text"
                        value={weight}
                        placeholder="Weight"
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </div>
                <br />
                <button className='btn btn-primary' type="submit">Save</button>
            </form>
        </div>
    );
}

export default ArticleForm;