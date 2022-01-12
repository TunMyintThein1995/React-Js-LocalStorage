import React, { useState, useEffect } from "react";
// import React, { useState } from 'react';
import { Container, Table, Button, Modal } from "react-bootstrap";

import EditUserForm from './EditUserForm';

const UserTable = (props) => {

  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});

  const handleUpdate = (i) => {
    setShow(true);
    setUser(props.users[i]);
  };

  const updateUser = (user) => {
    console.log(user)
   let updateData=  props.users.find(data=> data.id === user.id);
   updateData = user;
   setUser(updateData);
   setShow(false);
  };

  const handleClose = () => setShow(false);

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
            {/* {props.users.length > 0 ? (
              props.users.map((i) => (
                <tr key={i.id}>
                  <td>{i.name}</td>
                  <td>{i.price}</td>
                  <td>{i.author}</td>
                  <td>{i.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <th colSpan={3}>No users</th>
              </tr>
            )} */}
          </thead>
          <tbody className="border-top-0">
            {props.users.length > 0 ? (
              props.users.map((data, i) => (
                <tr key={data.id}>
                  <td>
                    <button
                      className="border-0 bg-white text-primary"
                      onClick={() => {
                        handleUpdate(i);
                      }}
                    >
                      {data.name}
                    </button>
                  </td>
                  <td>{data.price}</td>
                  <td>{data.author}</td>
                  <td>{data.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>No users</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
      {show && <EditUserForm
        show={show}
        updateUser={updateUser} 
        closeEvt={handleClose}       
        currentUser={user}
      />}
    </div>

  );
};

export default UserTable;
