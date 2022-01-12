import React, { useState } from 'react';
import { Container, Table, Button, Modal, Form, Row, Col } from 'react-bootstrap';


function ModalBox() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button color="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="px-5 mt-3">
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
              <Form.Label column sm="4">
                Book Name
              </Form.Label>
              <Col sm="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPrice">
              <Form.Label column sm="4">
                Price
              </Form.Label>
              <Col sm="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextAuthor">
              <Form.Label column sm="4">
                Author
              </Form.Label>
              <Col sm="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextDate">
              <Form.Label column sm="4">
                Date
              </Form.Label>
              <Col sm="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="pt-0 pb-4 mx-auto col-sm-6 justify-content-between border-top-0">
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalBox;
