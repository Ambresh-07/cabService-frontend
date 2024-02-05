import { React, useState } from "react";
import login from "../../css/login.css";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityIconOff from "@mui/icons-material/VisibilityOff";

import { Formik, useFormik } from "formik";
import { json } from "react-router-dom";

const initialValues = {
  username: "",
  email: "",
  password: "",
};
function Login() {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState(true);

  const [login, setLogin] = ([]);

  const handleShow = () => {
    console.log("profile working");
    setShow(!show);
    setPassword(!password);
  };

  const { values, errors, handleSubmit, handleChange, handleBlur, touched } =
    useFormik({
      initialValues: initialValues,
      onSubmit: (values, action) => {

        
           setLogin(values);
         

       
        console.log(login);
      },
    });
  console.log("login data : " + login);

  return (
    <>
      <div className="contains">
        <form action="#" className="login_form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="col-6">
            <div className="row">
              <label htmlFor="username">Username</label>
              <div className="user">
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="enter your Username"
                  className="form-control"
                  autoComplete="off"
                />
                <i className="iconsperson">{<PersonIcon />}</i>
              </div>
            </div>
            <div className="row">
              <label htmlFor="email">Email</label>
              <div className="user">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="enter your email"
                  className="form-control"
                  autoComplete="off"
                />
                <i className="iconsperson">
                  <MailIcon />
                </i>
              </div>
            </div>
            <div className="row">
              <label htmlFor="password">Password</label>
              <div className="user">
                <input
                  type={password ? "password" : "text"}
                  name="password"
                  id="password"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="enter your password"
                  className="form-control"
                  autoComplete="off"
                />
                <i className="iconsperson" onClick={handleShow}>
                  {show ? <VisibilityIcon /> : <VisibilityIconOff />}
                </i>
              </div>
            </div>
            <div className="row-6">
              <input
                type="submit"
                value="Login"
                className="btn btn-primary form-control"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
