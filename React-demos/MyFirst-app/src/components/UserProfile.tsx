type UserProfileProps = {
    name: string;
    age: number;
    qualifications: string[];
};

function UserProfile(props : UserProfileProps){

    return(
    
        <div className="card mb-4 shadow-l">
            <div className="card-body">
                <h4 className="card-title">{props.name} <small className="text-muted">(Age: {props.age})</small></h4>
                <h6 className="card-subtitle mb-2 text-muted">Qualifications:</h6>
                <ul className="list-group list-group-flush">
                    {props.qualifications.map((qualification, index) => (
                        <li key={index} className="list-group-item">
                            {qualification}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
    
}
export default UserProfile;