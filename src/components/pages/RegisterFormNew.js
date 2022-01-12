import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Col, Row, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const RegisterForm = () => {
  const { register, reset, setValue, formState, handleSubmit } = useForm({ mode: "onChange" });
  const { isValid, errors } = formState;

  const [disabled, setDisabled] = useState(false);
  const [submitChange, setSubmitChange] = useState("Confirm");
  const [resetChange, setResetChange] = useState("Clear");
  const [date, setDate] = useState();
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
    // localStorage.setItem('key', 'value');



    if (submitChange === 'Confirm') {
      setSubmitChange("Register");
      setResetChange("Back");
      setDisabled(true);
      console.log(data);
    } else {
      // navigate("/registerlists");
      // console.log(data);
    }

    if(submitChange !== 'Register') {
      navigate("/registerlists");
      console.log(data);
    }
  };

  // const onSubmit = (data) => {
  //   if (submitChange !== 'Confirm') {
  //     return;
  //   }
  //   setSubmitChange("Register");
  //   setResetChange("Back");
  //   setDisabled(true);
  //   const oldUser = JSON.parse(localStorage.getItem('user'));
  //   let id = oldUser ? oldUser.id + 1 : 1;
  //   setUser({ ...data, id });
  //   // console.log('formsubit', data, date, user);
  // };

  // const setUserInfo = () => {
  //   if (submitChange !== 'Register') {
  //     return;
  //   }
  //   const formData = { ...user, DateOfBirth: date };

  //   // Put the object into storage
  //   localStorage.setItem('user', JSON.stringify(formData));
  //   // console.log('formData', formData);
  //   const users = JSON.parse(localStorage.getItem('users')) || [];
  //   const updateUsers = [...users, formData];
  //   localStorage.setItem('users', JSON.stringify(updateUsers));
  //   navigate("/registerlists");
  // };

  const handleInputDate = (e) => {
    e.preventDefault();
    let age = getAge(e.target.value);
    setDate(e.target.value);
    setValue('age', age);
  };

  function getAge(dateString) {
    let today = new Date();
    let birthDate = new Date(dateString);
    // console.log(birthDate, 'Message');
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
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
            <Form.Group as={Row} className="mb-4" controlId="formPlaintextdate">
              <Form.Label column sm="4" className="text-dark">
                Date Of Birth
              </Form.Label>
              <Col sm="8" className="row mx-0 justify-content-between">
                <Col sm="6" className="ps-0">
                  <Form.Control
                    type="date"
                    name="date"
                    max="2010-12-31"
                    onChange={handleInputDate}
                    disabled={disabled}
                  />
                </Col>
                <Col sm="6" className="row">
                  <Form.Label column sm="4" className="text-dark">
                    Age
                  </Form.Label>
                  <Col sm="8" className="pe-0">
                    <Form.Control
                      type="text"
                      name="age"
                      placeholder="Age"
                      disabled={true}
                      {...register("age", { required: true, })}
                    />
                    {errors.age && (
                      <Form.Text className="text-danger">Age is required*</Form.Text>
                    )}
                  </Col>
                </Col>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-4" controlId="formPlaintextUserRole">
              <Form.Label column sm="4" className="text-dark">
                User Role
              </Form.Label>
              <Col sm="4">
                <Form.Select id="FormCustomSelect"
                  name="userrole"
                  disabled={disabled}
                  {...register("userrole", { required: true, })}
                >
                  <option value="">Choose...</option>
                  <option value="Administrator">Administrator</option>
                  <option value="User">User</option>
                  <option value="Guest">Guest</option>
                </Form.Select>
                {errors.userrole && (
                  <Form.Text className="text-danger">User Role is required*</Form.Text>
                )}
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="col-sm-4 mx-auto">
              <Col sm="6">
                <Button onClick={handleResetChange}>{resetChange}</Button>
              </Col>
              <Col sm="6">
                <Button type="submit"
                  disabled={!isValid}
                  // onClick={onSubmit}
                  // onClick={handleSubmitChange}
                >{submitChange}</Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
