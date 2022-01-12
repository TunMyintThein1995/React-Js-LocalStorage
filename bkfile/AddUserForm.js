import React, { useState } from "react";

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: "", price: "", author: "", date: "", };
  const [user, setUser] = useState(initialFormState);
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.price) return;
        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="price"
        value={user.price}
        onChange={handleInputChange}
      />
      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
