interface greetprops{
    name:string ;
    message : string;
}
function Greet (props:greetprops){


    return(
        <>
            <h1 className="bg-primary">
                Hello {props.name} <span></span>
                {props.message}
            </h1>

        </>
    )
}
export default Greet;