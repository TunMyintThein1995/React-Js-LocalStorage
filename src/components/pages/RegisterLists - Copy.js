import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";


const RegisterLists = () => {
  // const usersTableData = [
  //   { id: 'User ID', name: 'User Name', gender: 'Gender', email: 'Email', address: 'Address', date: 'Date Of Birth', age: 'Age', role: 'User Role', },
  // ];

  // const [usersTable] = useState(usersTableData);
  const usersInfo = JSON.parse(localStorage.getItem('users')) || [];
  const [users] = useState(usersInfo);


  return (
    <div className="bg-purple py-5">
      <Container>
        {users.length > 0 ? (
          <Table bordered>
            <thead className="table-secondary">
              <tr>
                <th>User ID</th>
                <th>User Name</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Address</th>
                <th>Date Of Birth</th>
                <th>Age</th>
                <th>User Role</th>
              </tr>
              {/* {usersTable.map((data, i) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.gender}</td>
                  <td>{data.email}</td>
                  <td>{data.address}</td>
                  <td>{data.date}</td>
                  <td>{data.age}</td>
                  <td>{data.role}</td>
                </tr>
              ))} */}
            </thead>
            <tbody className="border-top-0">
              {users.map((user, i) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.gender}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td>{user.DateOfBirth}</td>
                    <td>{user.age}</td>
                    <td>{user.role}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <div className="text-center py-2">
            <h4 className="text-dark">No Users</h4>
          </div>
        )}
        <div className="mt-5 text-center">
          <Link to="/registerform" className="btn bg-primary text-light">Register New User</Link>
        </div>
      </Container>
    </div>
  )
}

export default RegisterLists;