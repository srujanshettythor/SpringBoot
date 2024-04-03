import React, { useState, useRef } from "react";
import { Form, Input, Select, Button, CheckButton } from "react-validation";
import axios from 'axios';
import { isEmail } from "validator";

const RegisterPage = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeUserType = (e) => {
    setUserType(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setError(null);
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      axios.post('http://localhost:8000/login/add', {
        name: name,
        userid: email,
        password: password,
        usertype: userType
      })
      .then(function (response) {
        setMessage(response.data.message);
      })
      .catch(function (error) {
        setError(error.response.data.message || error.message || error.toString());
      })
      .finally(() => {
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <Form ref={form} onSubmit={handleRegister}>
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={onChangeName}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Input
                type="text"
                className="form-control"
                name="email"
                value={email}
                onChange={onChangeEmail}
                validations={[required, validEmail]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={onChangePassword}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="userType">User Type</label>
              <Select
                className="form-control"
                name="userType"
                value={userType}
                onChange={onChangeUserType}
                validations={[required]}
              >
                <option value="">Select User Type</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option> {/* Add more options as needed */}
              </Select>
            </div>

            <div className="form-group">
              <Button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                {loading ? (
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                ) : (
                  <span>Register</span>
                )}
              </Button>
            </div>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-success" role="alert">
                {message}
              </div>
            </div>
          )}

          {error && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            </div>
          )}

          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

const required = (value) => {
  if (!value) {
    return (
      <div className="invalid-feedback d-block">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="invalid-feedback d-block">
        This is not a valid email.
      </div>
    );
  }
};

export default RegisterPage;
