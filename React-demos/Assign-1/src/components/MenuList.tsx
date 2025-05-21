import { useEffect, useState } from "react";
interface items {
  id: number;
  name: string;
  image: string;
  rating: string;
}

function MenuList() {
  const [menu, setMenu] = useState<items[]>([]);
  const [loading,setloading]  = useState<boolean>(true);
  const [error, setError] = useState<boolean | null>(null);

  let Loaditems = async () => {
    try{
      let response = await fetch("https://dummyjson.com/recipes");
      if(!response.ok) {
        throw new Error ("Error occured while calling API");
      }
       let data = await response.json();
    let itemdata: items[] = data.recipes;
    setMenu(itemdata);
    }catch(error : any){
      setError(error.message);
    }finally{
      setloading(false);
    }
  };
   useEffect(() => {
    Loaditems();
  }, []);
  if(loading){
    return(
      <div className="container text-center bg-dark">
        <h1 className="text-center text-warning">Loading</h1>
      </div>
    );
  }
 
  return (
    <div className="bg-dark">
      <h1 className="text-warning text-center">Dishes</h1>
      <div className="container my-3 bg-muted">
        <div className="row g-4">
            {
                menu.slice(0,10).map((dish) => (
                <div className="card m-3 bg-warning py-3" style={{ width: "18rem" }}>
                    <img src={dish.image} className="card-img-top " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{dish.name}</h5>
                        <a href="#" className="btn btn-dark">
                        order now
                        </a>
                        </div>
                </div>
                ))
            }
        </div>
      </div>
    </div>
  );
}
export default MenuList;
