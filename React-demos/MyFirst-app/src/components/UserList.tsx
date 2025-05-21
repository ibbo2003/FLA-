import { useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
function UserList() {
  const [user, setUser] = useState<User[]>([]);
  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    const UsersData: User[] = await response.json();
    setUser(UsersData);
  };
  return (
    <div className="container ">
      <h1 className="text-danger">Users List from fake Api store </h1>
      <button onClick={fetchUsers} className="btn btn-primary mb-4">
        Get Users list
      </button>
      <ul className="list-group">
        {user.map((user) => (
          <li className="list-group-item text-dark border-3 border-collapse">
            {user.name} <br />
            <span className="text-primary">{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UserList;
