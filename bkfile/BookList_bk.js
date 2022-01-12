import React, { useState } from 'react';
import { Container, Table, Button, Modal } from 'react-bootstrap';

class Item extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
        <td>{this.props.author}</td>
        <td>{this.props.date}</td>
      </tr>
    );
  }
}

class BookList extends React.Component {
  state = {
    th: [
      { id: 1, name: 'Book Name', price: 'Price', author: 'Author', date: 'Date' },
    ],
    data: [
      { id: 1, name: 'Smooth of Love', price: 2000, author: 'Su Myat Mon Mon', date: '1/8/2019' },
      { id: 2, name: 'My serious love', price: 1500, author: 'Yar Za Koe', date: '' },
      { id: 3, name: 'Smooth of Love', price: 2000, author: 'Su Myat Mon Mon', date: '1/8/2019' },
      { id: 4, name: 'My serious love', price: 1500, author: 'Yar Za Koe', date: '' },
    ]
  }
  render() {
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
              {/* {this.state.data.map(i => {
                return (
                  <tr key={i.id}>
                    <td>{i.name}</td>
                    <td>{i.price}</td>
                    <td>{i.author}</td>
                    <td>{i.date}</td>
                  </tr>
                )
              })} */}

              {/* <tr> */}
                {this.state.data.map(i => {
                  return (
                    <Item
                      key={i.id}
                      name={i.name}
                      price={i.price}
                      author={i.author}
                      date={i.date}
                    />
                  )
                })}
              {/* </tr> */}
            </tbody>
          </Table>
        </Container>
      </div>
    )
  }
}
// class BookList extends React.Component {
//   render() {
//     return (
//       <div className="bg-purple py-5">
//         <Container>
//           <Table bordered>
//             <thead className="table-secondary">
//               <tr>
//                 <th>Book Name</th>
//                 <th>Price</th>
//                 <th>Author</th>
//                 <th>Date</th>
//               </tr>
//             </thead>
//             <tbody className="border-top-0">
//               <tr>
//                 <td>Smooth of Love</td>
//                 <td>2000</td>
//                 <td>Su Myat Mon Mon</td>
//                 <td>1/8/2019</td>
//               </tr>
//               <tr className="bg-light">
//                 <td>My serious love</td>
//                 <td>1500</td>
//                 <td>Yar Za Koe</td>
//                 <td></td>
//               </tr>
//               <tr>
//                 <td>Smooth of Love</td>
//                 <td>2000</td>
//                 <td>Su Myat Mon Mon</td>
//                 <td>1/8/2019</td>
//               </tr>
//               <tr className="bg-light">
//                 <td>My serious love</td>
//                 <td>1500</td>
//                 <td>Yar Za Koe</td>
//                 <td></td>
//               </tr>
//             </tbody>
//           </Table>
//         </Container>
//       </div>
//     );
//   }
// }

// function BookList() {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     name: '',
//   //     email: '',
//   //     url: '',
//   //     phone: '',
//   //     formErrors: { name: '', email: '', url: '', phone: '', },
//   //     nameValid: false,
//   //     emailValid: false,
//   //     urlValid: false,
//   //     phoneValid: false,
//   //     ConfirmValid: false,
//   //   };
//   // }
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose} animation={false}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

export default BookList;