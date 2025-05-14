interface productCardprops{
  title : string;
  description : string;
}

function productCard(props : productCardprops) {
  return (
    <>
      <div className="card flex-col m-4 ">
        <img src="" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.description}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}
export default productCard;
