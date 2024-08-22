import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './RecipeList.css'

export default function RecipeList({ recipes }) {

  if (recipes.length==0) {
    return <div className="error">No recipes found...</div>
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to cook</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipe/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  )
}
