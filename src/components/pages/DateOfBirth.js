import React, { useState } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const DateOfBirth = (props) => {

  const { register, setValue, } = useForm({ mode: "onChange" });
  const [date, setDate] = useState();

  const handleInputDate = (e) => {
    e.preventDefault();
    let age = getAge(e.target.value);
    setDate(e.target.value);
    setValue('age', age);
    props.getDate({ date: e.target.value, age });
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
            disabled={props.disabled}
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
          </Col>
        </Col>
      </Col>
    </Form.Group>
  );
}

export default DateOfBirth;
