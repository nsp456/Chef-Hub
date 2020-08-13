import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './index.css'
import './App.css';

const Service = () => {

    const APP_ID = '13e71211';
    const APP_KEY = '5b47ff77e300a2634e351ce1dc739ac3';

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    };

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    return (
        <div className="App">
            <h1>Welcome to Food Recipe Web-App</h1>
            <h3 className="ph8">Here you can find the calories and ingredients required for making your favourite dishes just by searching in
            the search box below. Good Luck !!
        </h3>

            <div className="ph4">
                <form onSubmit={getSearch} className="search-form form-inline my-2 my-lg-0 tj flex items-center ph4">
                    <input
                        className="form-control mr-sm-2 w-75"
                        type="search"
                        value={search}
                        placeholder="Search"
                        aria-label="Search"
                        onChange={updateSearch}
                    />
                    <button className="btn btn-outline-success my-2 my-sm-0 w-25" type="submit">
                        Search
                    </button>
                </form>
            </div>
            <div className="recipes">
                {recipes.map((recipe, index) => (
                    <Recipe
                        key={index}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                    />
                ))}
            </div>
        </div>
    );
};

export default Service;