import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefDetails from '../ChefDetails/ChefDetails';

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
        </div>
    );
};

export default ChefRecipe;