import React from 'react';

function Find(props){
  console.log(props);

  const recipeList = props.recipe.map((recipe) =>{
    return <li key={recipe._id}>
      Recipe Name: {recipe.name}<br/>
      Author: {recipe.author}<br/>
      Difficulty: {recipe.difficulty}<br/>
      Prep Time: {recipe.time}<br/>
      Ingredients: {recipe.ingredients}<br/>
      Description: {recipe.description}<br/><br/>
    </li>;
  });

  return (
    <div>
      <h2>Find</h2>
      <input onChange={props.onChangeName} placeholder='Search by name' type='text' />
      <button onClick={props.onSubmitRecipe} type='button' >Search</button>
      <br/><br/>
      <ul>{recipeList}</ul>
    </div>
  );
}


export default Find;
