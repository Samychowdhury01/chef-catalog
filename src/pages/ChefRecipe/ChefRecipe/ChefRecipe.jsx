import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefDetails from '../ChefDetails/ChefDetails';
import RecipeCard from '../RecipeCard/RecipeCard';

const ChefRecipe = () => {
    const {id} = useParams()
    const recipes = useLoaderData()
    const [chefData, setChefData] =useState({})
    useEffect(() => {
        fetch(`http://localhost:3000/chefData/${id}`)
        .then(res => res.json())
        .then(data => setChefData(data))
    },[])
    
    return (
        <div>
            <ChefDetails chefData={chefData}/>
            <div>
                {
                    recipes.map((recipe) => <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    >
                        
                    </RecipeCard>)
                }
            </div>
        </div>
    );
};

export default ChefRecipe;