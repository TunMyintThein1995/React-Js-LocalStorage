import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


class ThirdContentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      url: '',
      phone: '',
      formErrors: { name: '', email: '', url: '', phone: '', },
      nameValid: false,
      emailValid: false,
      urlValid: false,
      phoneValid: false,
      ConfirmValid: false,
    };

    this.HandleClear = this.HandleClear.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  HandleClear() {
    this.setState({
      selectedFile: null,
      fileInputKey: Date.now(),
    });
  }

  onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let urlValid = this.state.urlValid;
    let phoneValid = this.state.phoneValid;

    switch (fieldName) {
      case 'name':
        nameValid = value.match(/^[a-zA-Z _]+$/i);
        fieldValidationErrors.name = nameValid ? '' : 'name is require*';
        break;
      case 'email':
        emailValid = value.match(/^([\w.-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'email is require*';
        break;
      case 'url':
        urlValid = value.match("^(http|https|ftp)");
        fieldValidationErrors.url = urlValid ? '' : 'url is require*';
        break;
      case 'phone':
        phoneValid = value.match(/^[09]/);
        fieldValidationErrors.phone = phoneValid ? '' : 'phone is require*';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      nameValid: nameValid,
      emailValid: emailValid,
      urlValid: urlValid,
      phoneValid: phoneValid,
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ ConfirmValid: this.state.nameValid && this.state.emailValid && this.state.urlValid && this.state.phoneValid });
  }

  render() {
    return (
      <div className="form bg-white py-5">
        <div className="container">
          <div className="col-7 m-auto">
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                <Form.Label column sm="4" className="text-dark">
                  Name
                </Form.Label>
                <Col sm="8">
                  <Form.Control type="text" required name="name" placeholder="Name"
                    key={this.state.fileInputKey}
                    onChange={this.onChangeHandler}
                  />
                  <label className="text-danger">{this.state.formErrors.name}</label>
                </Col>
              </Form.Group>
              <Form.Group as={Row}
                className="mb-3"
                controlId="formPlaintextEmail">
                <Form.Label column sm="4" className="text-dark">
                  Email
                </Form.Label>
                <Col sm="8">
                  <Form.Control type="email" required name="email" placeholder="Email"
                    key={this.state.fileInputKey}
                    onChange={this.onChangeHandler}
                  />
                  <label className="text-danger">{this.state.formErrors.email}</label>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextUrl">
                <Form.Label column sm="4" className="text-dark">
                  Url
                </Form.Label>
                <Col sm="8">
                  <Form.Control type="url" name="url" placeholder="Url"
                    key={this.state.fileInputKey}
                    onChange={this.onChangeHandler}
                  />
                  <label className="text-danger">{this.state.formErrors.url}</label>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPhone">
                <Form.Label column sm="4" className="text-dark">
                  Phone Number
                </Form.Label>
                <Col sm="8">
                  <Form.Control type="tel" name="phone" placeholder="phone"
                    key={this.state.fileInputKey}
                    onChange={this.onChangeHandler}
                  />
                  <label className="text-danger">{this.state.formErrors.phone}</label>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="col-sm-8 justify-content-center mx-auto">
                <Col sm="5">
                  <Button type="reset" onClick={this.HandleClear} >Cancel</Button>
                </Col>
                <Col sm="5">
                  <Button type="submit" disabled={!this.state.ConfirmValid}>Confirm</Button>
                </Col>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default ThirdContentForm;
