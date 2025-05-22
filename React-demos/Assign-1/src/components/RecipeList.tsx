import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface items {
  id: number;
  name: string;
  image: string;
  rating: string;
}

function RecipeList() {
  const [menu, setMenu] = useState<items[]>([]);
  const [loading, setloading] = useState<boolean>(true);
  const [error, setError] = useState<boolean | null>(null);

  let Loaditems = async () => {
    try {
      let response = await fetch("https://dummyjson.com/recipes");
      if (!response.ok) {
        throw new Error("Error occurred while calling API");
      }
      let data = await response.json();
      let itemdata: items[] = data.recipes;
      setMenu(itemdata);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    Loaditems();
  }, []);

  if (loading) {
    return (
      <div className="container text-center bg-dark">
        <h1 className="text-center text-warning">Loading</h1>
      </div>
    );
  }

  return (
    <div className="bg-dark">
      <h1 className="text-warning text-center">RECIPES</h1>
      <div className="container my-3 bg-muted">
        <div className="row g-4">
          {menu.slice(0, 10).map((dish) => (
            <div
              key={dish.id}
              className="card m-3 bg-warning py-3"
              style={{ width: "18rem" }}
            >
              <img src={dish.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{dish.name}</h5>
                <Link to={`/recipes/${dish.id}`}>
                  <div className="btn btn-dark">
                    view details
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipeList;
