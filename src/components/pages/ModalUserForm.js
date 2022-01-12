import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";

const ModalUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleClose = () => props.handleClose();

  return (
    <Modal show={props.show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="px-5 mt-3">
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            props.updateUser(user.id, user);
          }}
        >
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
            <Form.Label column sm="4">
              Book Name
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPrice">
            <Form.Label column sm="4">
              Price
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="text"
                name="price"
                value={user.price}
                onChange={handleInputChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextAuthor">
            <Form.Label column sm="4">
              Author
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="text"
                name="author"
                value={user.author}
                onChange={handleInputChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextDate">
            <Form.Label column sm="4">
              Date
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="text"
                name="date"
                value={user.date}
                onChange={handleInputChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-0 mx-auto col-sm-6">
            <Col sm="6">
              <Button
                variant="secondary"
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Col>
            <Col sm="6">
              <button className="btn bg-primary text-white">Confirm</button>
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalUserForm;
