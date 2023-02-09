import React, { useState, useContext } from "react";
import Joi from "joi-browser";
import "./RegisterForm.css";
import axios from "axios";
import { URLContext } from "./../../../App";

const RegisterForm = () => {
  const URL = useContext(URLContext);

  const [account, setAccount] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const schema = {
    fullName: Joi.string().required().label("Username"),
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(5).max(10).required().label("Password"),
  };

  // TODO: Form Validation
  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(account, schema, options);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  // TODO: Field Validation
  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const newSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, newSchema);

    return error ? error.details[0].message : null;
  };

  // TODO: Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    console.log(errors);
    setErrors({ errors: errors || {} });

    if (errors) return;

    //   Call the server
    registerUser();
    console.log("Submitted");
  };

  const registerUser = async () => {
    await axios.post(`${URL}user`, {
      name: account.fullName,
      email: account.email,
      password: account.password,
    });
  };

  // TODO: Form value Change
  const handleChange = ({ target: input }) => {
    const newErrors = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) newErrors[input.name] = errorMessage;
    else delete newErrors[input.name];

    const newAccount = { ...account };
    newAccount[input.name] = input.value;

    console.log("new Errors", newErrors);
    setAccount(newAccount);
    setErrors(newErrors);

    // console.log(input.name);
  };

  return (
    <div id="register-form">
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Register</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Name</label>
          <input
            autoFocus
            id="fullName"
            name="fullName"
            value={account.fullName}
            onChange={handleChange}
            type="text"
            className="form-control"
          />
          {errors.username && (
            <div className="alert alert-danger">{errors.name}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={account.email}
            onChange={handleChange}
            type="email"
            className="form-control"
          />
          {errors.username && (
            <div className="alert alert-danger">{errors.email}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            value={account.password}
            onChange={handleChange}
            type="text"
            className="form-control"
          />
          {errors.password && (
            <div className="alert alert-danger">{errors.password}</div>
          )}
        </div>

        <button
          disabled={validate()}
          id="btn-register"
          className="btn btn-primary btn-register"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
