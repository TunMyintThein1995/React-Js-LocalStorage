import React from "react";
// import React, { useState } from 'react';
import { Container, Table, Button, Modal } from "react-bootstrap";

const UserTable = (props) => {
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
              props.users.map((i) => (
                <tr key={i.id}>
                  <td>
                    <button
                      className="border-0 bg-white text-primary"
                      onClick={() => {
                        props.editRow(i);
                      }}
                    >
                      {i.name}
                    </button>
                  </td>
                  <td>{i.price}</td>
                  <td>{i.author}</td>
                  <td>{i.date}</td>
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
    </div>
  );
};

export default UserTable;
