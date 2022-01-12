import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <header className="bg-light py-5" >
        <div className="container">
          <h2 className="text-dark mb-4">Welcome From React OJT Project04</h2>
          <Navbar variant="dark">
            <Nav className="me-auto">
              <Nav.Link href="/" className="bg-primary text-light me-4 btn">FirstOjtContent</Nav.Link>
              <Nav.Link href="/secondcontent" className="bg-primary text-light me-4 btn">SeconOjtContent</Nav.Link>
              <Nav.Link href="/thirdcontent" className="bg-primary text-light me-4 btn">ThirdOjtContent</Nav.Link>
              <Nav.Link href="/booklist" className="bg-primary text-light me-4 btn">Book List</Nav.Link>
              <Nav.Link href="/registerlists" className="bg-primary text-light me-4 btn">Register Lists</Nav.Link>
              <Nav.Link href="/userform" className="bg-primary text-light me-4 btn">User Form</Nav.Link>
            </Nav>
          </Navbar>
        </div>
      </header>
    );
  }
}

export default Header;
