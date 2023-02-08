import React, { useState } from "react";
import Joi from "joi-browser";
import "./LoginForm.css";

const LoginForm = () => {
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
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

    console.log("Submitted");
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
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            autoFocus
            id="username"
            name="username"
            value={account.username}
            onChange={handleChange}
            type="text"
            className="form-control"
          />
          {errors.username && (
            <div className="alert alert-danger">{errors.username}</div>
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
          id="btn-login"
          className="btn btn-primary btn-login"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
