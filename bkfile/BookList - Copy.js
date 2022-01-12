import React, { useState } from "react";
import UserTable from "./UserTable";
// import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';


const BookList = () => {
  const usersData = [
    { id: 1, name: 'Smooth of Love', price: 2000, author: 'Su Myat Mon Mon', date: '1/8/2019' },
    { id: 2, name: 'My serious love', price: 1500, author: 'Yar Za Koe', date: '' },
    { id: 3, name: 'Smooth of Love', price: 2000, author: 'Su Myat Mon Mon', date: '1/8/2019' },
    { id: 4, name: 'My serious love', price: 1500, author: 'Yar Za Koe', date: '' },
  ];

  const initialFormState = { id: null, name: '', price: '', author: '', date: '', }

  // Setting state
  const [users, setUsers] = useState(usersData)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  // CRUD operations
  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  const editRow = user => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, price: user.price, author: user.author, date: user.date })
  }

  return (
    <div className="container">
      <div className="flex-row">

        <div className="flex-large">
          {/* <h2>View users</h2> */}
          <UserTable users={users} />
        </div>
      </div>
    </div>
  )
}

export default BookList;

// import React, { useState } from 'react';
// import { Container, Table, Button, Modal } from 'react-bootstrap';
// import ModalBox from "./ModalBox";

// class TheadLists extends React.Component {
//   render() {
//     return (
//       <tr>
//         <th>{this.props.name}</th>
//         <th>{this.props.price}</th>
//         <th>{this.props.author}</th>
//         <th>{this.props.date}</th>
//       </tr>
//     );
//   }
// }

// class TbodyLists extends React.Component {
//   render() {
//     return (
//       <tr>
//         <td>
//           {this.props.name}
//           <ModalBox />
//         </td>
//         <td>{this.props.price}</td>
//         <td>{this.props.author}</td>
//         <td>{this.props.date}</td>
//       </tr>
//     );
//   }
// }

// class BookList extends React.Component {
//   state = {
//     thead: [
//       { id: 1, name: 'Book Name', price: 'Price', author: 'Author', date: 'Date' },
//     ],
//     data: [
//       { id: 1, name: 'Smooth of Love', price: 2000, author: 'Su Myat Mon Mon', date: '1/8/2019' },
//       { id: 2, name: 'My serious love', price: 1500, author: 'Yar Za Koe', date: '' },
//       { id: 3, name: 'Smooth of Love', price: 2000, author: 'Su Myat Mon Mon', date: '1/8/2019' },
//       { id: 4, name: 'My serious love', price: 1500, author: 'Yar Za Koe', date: '' },
//     ]
//   }

//   render() {
//     return (
//       <div className="bg-purple py-5">
//         <Container>
//           <Table bordered>
//             <thead className="table-secondary">
//               {this.state.thead.map(i => {
//                 return (
//                   <TheadLists
//                     key={i.id}
//                     name={i.name}
//                     price={i.price}
//                     author={i.author}
//                     date={i.date}
//                   />
//                 )
//               })}
//             </thead>
//             <tbody className="border-top-0">
//               {this.state.data.map(i => {
//                 return (
//                   <TbodyLists
//                     key={i.id}
//                     name={i.name}
//                     price={i.price}
//                     author={i.author}
//                     date={i.date}
//                   />
//                 )
//               })}
//             </tbody>
//           </Table>
//         </Container>
//       </div>
//     )
//   }
// }

// export default BookList;
