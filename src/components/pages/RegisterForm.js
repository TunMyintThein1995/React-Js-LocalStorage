import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Col, Row, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import DateOfBirth from './DateOfBirth';


const RegisterForm = () => {

  const { register, reset, formState, handleSubmit } = useForm({ mode: "onChange" });
  const { isValid, errors } = formState;

  const [disabled, setDisabled] = useState(false);
  const [submitChange, setSubmitChange] = useState("Confirm");
  const [resetChange, setResetChange] = useState("Clear");
  const [date, setDate] = useState(null);
  const [age, setAge] = useState(null);
  const [user, setUser] = useState({});

  // Routes Link
  const navigate = useNavigate();

  const handleResetChange = () => {
    if (resetChange === 'Back') {
      setSubmitChange("Confirm");
      setResetChange("Clear");
      setDisabled(false);
    } else {
      reset();
    }
  };

  const onSubmit = (data) => {
    if (submitChange !== 'Confirm') {
      return;
    }
    setSubmitChange("Register");
    setResetChange("Back");
    setDisabled(true);
    const oldUser = JSON.parse(localStorage.getItem('user'));
    let id = oldUser ? oldUser.id + 1 : 1;
    setUser({ ...data, id });
    // console.log('formsubit', data, date, user);
  };

  const setUserInfo = () => {
    if (submitChange !== 'Register') {
      return;
    }
    const formData = { ...user, DateOfBirth: date, age };

    // Put the object into storage
    localStorage.setItem('user', JSON.stringify(formData));
    // console.log('formData', formData);
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updateUsers = [...users, formData];
    localStorage.setItem('users', JSON.stringify(updateUsers));
    navigate("/registerlists");
  };

  const handleDate = ({ date, age }) => {
    setDate(date);
    setAge(age);
    // console.log(date, age, 'handleDate');
  }

  return (
    <div className="form bg-white py-5">
      <div className="container">
        <div className="col-7 m-auto">
          <Form onSubmit={handleSubmit(onSubmit)} >
            <Form.Group as={Row} className="mb-4" controlId="formPlaintextUserName">
              <Form.Label column sm="4" className="text-dark">
                User Name
              </Form.Label>
              <Col sm="4">
                <Form.Control type="text"
                  name="name"
                  placeholder="User Name"
                  disabled={disabled}
                  {...register("name", { required: true, pattern: /^[a-zA-Z _]+$/i, })}
                />
                {errors.name && (
                  <Form.Text className="text-danger">User Name is required*</Form.Text>
                )}
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-4 align-items-center" controlId="formPlaintextGender">
              <Form.Label column sm="4" className="text-dark">
                Gender
              </Form.Label>
              <Col sm="4" className="row mx-0">
                <Form.Check className="col-sm-6"
                  type="radio"
                  label="Male"
                  name="gender"
                  value="male"
                  disabled={disabled}
                  {...register("gender", { required: true, })}
                />
                <Form.Check className="col-sm-6"
                  type="radio"
                  label="Female"
                  name="gender"
                  value="female"
                  disabled={disabled}
                  {...register("gender", { required: true, })}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-4" controlId="formPlaintextEmail">
              <Form.Label column sm="4" className="text-dark">
                Email
              </Form.Label>
              <Col sm="4">
                <Form.Control type="email"
                  name="email"
                  placeholder="Email"
                  disabled={disabled}
                  {...register("email", { required: true, pattern: /^([\w.-]+)@([\w-]+\.)+([\w]{2,})$/i, })}
                />
                {errors.email && (
                  <Form.Text className="text-danger">Email is required*</Form.Text>
                )}
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-4" controlId="formPlaintextAddress">
              <Form.Label column sm="4" className="text-dark">
                Address
              </Form.Label>
              <Col sm="8">
                <Form.Control as="textarea" rows={3}
                  name="address"
                  placeholder="Address"
                  disabled={disabled}
                  {...register("address", { required: true, pattern: /^[a-zA-Z _?]+$/i, })}
                />
                {errors.address && (
                  <Form.Text className="text-danger">Address is required*</Form.Text>
                )}
              </Col>
            </Form.Group>
            <DateOfBirth getDate={handleDate} disabled={disabled} />
            <Form.Group as={Row} className="mb-4" controlId="formPlaintextUserRole">
              <Form.Label column sm="4" className="text-dark">
                User Role
              </Form.Label>
              <Col sm="4">
                <Form.Select id="FormCustomSelect"
                  name="role"
                  disabled={disabled}
                  {...register("role", { required: true, })}
                >
                  <option value="">Choose...</option>
                  <option value="Administrator">Administrator</option>
                  <option value="User">User</option>
                  <option value="Guest">Guest</option>
                </Form.Select>
                {errors.role && (
                  <Form.Text className="text-danger">User Role is required*</Form.Text>
                )}
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="col-sm-4 mx-auto">
              <Col sm="6">
                <Button onClick={handleResetChange}>{resetChange}</Button>
              </Col>
              <Col sm="6">
                {submitChange === 'Register' ? <Button
                  onClick={setUserInfo}
                >{submitChange}</Button> :
                  <Button type="submit"
                    disabled={!isValid || !date}
                  >{submitChange}</Button>}
              </Col>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
