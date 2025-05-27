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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecipes, setTotalRecipes] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const List_Per_Page = 8;
  const skip = (currentPage - 1) * List_Per_Page;

  let Loaditems = async () => {
    try {
      let response = await fetch(
        `https://dummyjson.com/recipes?limit=${List_Per_Page}&skip=${skip}`
      );
      if (!response.ok) {
        throw new Error("Error occurred while calling API");
      }
      let data = await response.json();
      let itemdata: items[] = data.recipes;
      setMenu(itemdata);
      setTotalRecipes(data.total);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setloading(false);
    }
  };
  let LoadSearchItems = async (searchTerm: string) => {
    try {
      let response = await fetch(
        `https://dummyjson.com/recipes/search?q=${searchTerm}`
      );
      let data = await response.json();
      let itemdata: items[] = data.recipes;
      setMenu(itemdata);
      setTotalRecipes(data.total);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    Loaditems();
  }, [currentPage]);

  const total_pages = Math.ceil(totalRecipes / List_Per_Page);
  const pageNumbers = [];
  for (let i = 1; i <= total_pages; i++) {
    pageNumbers.push(i);
  }

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
      <div className="container mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={() => LoadSearchItems(searchTerm)}
        >
          search
        </button>
      </div>
      <div className="container my-3 bg-muted">
        <div className="row g-4">
          {menu.map((dish) => (
            <div
              key={dish.id}
              className="card m-3 bg-warning py-3"
              style={{ width: "18rem" }}
            >
              <img src={dish.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{dish.name}</h5>
                <Link to={`/recipes/${dish.id}`}>
                  <div className="btn btn-dark">view details</div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <nav className="mt-4">
          <ul className="pagination justify-content-center">
            {currentPage > 1 ? (
              <button
                className={
                  currentPage === 1 ? "page-link-disabled" : "page-link"
                }
                onClick={() => {
                  setCurrentPage(currentPage - 1);
                  window.scrollTo({ top: 0 });
                }}
              >
                &lt;
              </button>
            ) : (
              ""
            )}

            {pageNumbers.map((pagenumber) => (
              <li
                className={
                  currentPage === pagenumber ? "page-item active" : "page-item"
                }
                key={pagenumber}
              >
                <button
                  className="page-link"
                  onClick={() => {
                    setCurrentPage(pagenumber);
                    window.scrollTo({ top: 0 });
                  }}
                >
                  {pagenumber}
                </button>
              </li>
            ))}
            {currentPage === pageNumbers.length ? (
              ""
            ) : (
              <button
                className="page-link"
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                  window.scrollTo({ top: 0 });
                }}
              >
                &gt;
              </button>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default RecipeList;
