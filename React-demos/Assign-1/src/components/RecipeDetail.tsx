import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Recipe {
  id: number;
  name: string;
  image: string;
  rating: number;
  ingredients: string[];
  instructions: string;
}

function RecipeDetail() {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch recipe details.");
        }
        const data: Recipe = await response.json();
        setRecipe(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [id]);

  if (loading) {
    return <div className="text-center text-warning mt-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-danger mt-5">Error: {error}</div>;
  }

  if (!recipe) {
    return <div className="text-center text-light mt-5">Recipe not found.</div>;
  }

  return (
    <div className="container my-4 bg-dark text-light p-4 rounded">
      <h2 className="text-warning text-center">{recipe.name}</h2>
      <div className="text-center">
        <img
          src={recipe.image}
          className="img-fluid rounded my-3 border border-warning"
          style={{ width: "300px", height: "300px" }}
          alt={recipe.name}
        />
      </div>
      <p className="text-center">
        <strong className="text-warning">Rating:</strong> <span className="text-warning">{recipe.rating}</span>
      </p>
      <h4 className="text-warning">Ingredients:</h4>
      <ul>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h4 className="text-warning">Instructions:</h4>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;
