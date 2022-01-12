import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import ModalUserForm from "./ModalUserForm";


const BookList = () => {
  const usersData = [
    { id: 1, name: 'Smooth of Love', price: 2000, author: 'Su Myat Mon Mon', date: '1/8/2019' },
    { id: 2, name: 'My serious love', price: 1500, author: 'Yar Za Koe', date: '' },
    { id: 3, name: 'Smooth of Love', price: 2000, author: 'Su Myat Mon Mon', date: '1/8/2019' },
    { id: 4, name: 'My serious love', price: 1500, author: 'Yar Za Koe', date: '' },
  ];

  const FormUsersData = { id: null, name: '', price: '', author: '', date: '', };

  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(FormUsersData);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  // CRUD operations
  const updateUser = (id, updateData) => {
    let data = users.find(data => data.id === id);
    data.name = updateData.name;
    data.price = updateData.price;
    data.author = updateData.author;
    data.date = updateData.date;
    setUsers(users);
    setShow(false);
    // console.log(data);
  }

  const EditHandleShow = (user) => {
    setShow(true);
    setCurrentUser(user);
  }


  return (
    <div className="bg-purple py-5">
      <Container>
        <Table bordered>
          <thead className="table-secondary">
            <tr>
              <th>Book Name</th>
              <th>Price</th>
              <th>Author</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody className="border-top-0">
            {users.map((data, i) => {
              return (
                <tr key={data.id}>
                  <td>
                    <button
                      className="border-0 bg-white text-primary"
                      onClick={() => { EditHandleShow(data) }}
                    >
                      {data.name}
                    </button>
                  </td>
                  <td>{data.price}</td>
                  <td>{data.author}</td>
                  <td>{data.date}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
      {show && <ModalUserForm
        show={show}
        updateUser={updateUser}
        handleClose={handleClose}
        currentUser={currentUser}
      />}
    </div>
  )
}

export default BookList;