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
        <div className='p-5 md:p-0'>

            <ChefDetails chefData={chefData}/>
            
            <div className='mt-24'>
                <h1 className='text-5xl font-extrabold text-center'>Recipes</h1>
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