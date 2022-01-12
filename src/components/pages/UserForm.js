import React, { useState } from 'react';
import Child from './UserFormChild';

const UserForm = () => {
  const usersName = { name: "", };
  const [user, setUser] = useState(usersName);

  // const [user, setUser] = useState({ name: "", });
  // const { name } = user;

  const handleCallback = (childData) => {
    // setUser(childData)
    setUser({ name: childData })
  }


  return (
    <div className="container py-5">
      <Child parentCallback={handleCallback} />
      {user.name}
      {/* <ul>
        {props.user.map((data, i) => {
          return (
            <li>{data.name}</li>
          );
        })}
      </ul> */}
    </div>
  )
}

export default UserForm;
