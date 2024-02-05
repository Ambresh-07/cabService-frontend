import { React, createContext, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { userSchema } from "../../schemas/AddUserSchemas";
import { Formik, useFormik } from "formik";
import Dashboard1 from "../../components/pages/Dashboard";
import { helper } from "../../services/helper";
import { myaxios } from "../../services/helper";
import { getallusers } from "../../services/UserService";
import { saveuser } from "../../services/UserService";
import Dashboard from "../../components/pages/Dashboard";
import { Navigate, useNavigate, Redirect } from "react-router-dom";
export const UserContext = createContext();

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  contcact: "",
  address: "",
  status: "",
  role: "",
};

function AddUser() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [check, setCheck] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setloading] = useState(true);

  // const [user, setUser] = useState([]);
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    address: "",
    status: "",
    role: "",
  });

  const { values, errors, handleSubmit, handleChange, handleBlur, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: userSchema,

      onSubmit: (values, { resetForm }) => {
        setCheck(false);
        // if (values) {
        //   setUser(values);
        //    console.log("user data : "+user);
        //  saveuser(user);
        //   resetForm({ values: "" });
        // }

        saveuser(values)
          .then((resp) => {
            console.log(resp);
            console.log("response log working");
            
            resetForm({ values: "" });
            setShow(true)
          })
          .catch((errors) => {
            console.log("errors are getting");
            console.log(errors);
          });
      },
    });


  return (
    <>
      <Button variant="primary" className="user_btn" onClick={handleShow}>
        Add User
      </Button>

      {check ? (
        <>
          <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Add User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="">first_Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="firstname"
                        id="firstname"
                        value={values.firstname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.firstname && touched.firstname ? (
                        <p className="errormsg">{errors.firstname}</p>
                      ) : null}
                    </div>
                    <div className="col-6">
                      <label htmlFor="">last_name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="lastname"
                        id="lastname"
                        value={values.lastname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.lastname && touched.lastname ? (
                        <p className="errormsg">{errors.lastname}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-6">
                      <label htmlFor="">email</label>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      {errors.email && touched.email ? (
                        <p className="errormsg">{errors.email}</p>
                      ) : null}
                    </div>
                    <div className="col-6">
                      <label htmlFor="">contact</label>
                      <input
                        type="text"
                        className="form-control"
                        name="contact"
                        id="contact"
                        value={values.contact}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.contact && touched.contact ? (
                        <p className="errormsg">{errors.contact}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="">address</label>
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        id="address"
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.address && touched.address ? (
                        <p className="errormsg">{errors.address}</p>
                      ) : null}
                    </div>
                    <div className="col-6">
                      <label htmlFor="">status</label>
                      <select
                        name="status"
                        id="status"
                        className="form-control"
                        value={values.status}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value="selected" selected>
                          --select--
                        </option>
                        <option value="active">Active</option>
                        <option value="inactive">InActive</option>
                      </select>
                      {errors.status && touched.status ? (
                        <p className="errormsg">{errors.status}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="">role</label>
                      <select
                        name="role"
                        id="role"
                        className="form-control"
                        value={values.role}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value="selected" selected>
                          --select--
                        </option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                        <option value="employee">Employee</option>
                        <option value="driver">Driver</option>
                      </select>
                      {errors.role && touched.role ? (
                        <p className="errormsg">{errors.role}</p>
                      ) : null}
                    </div>
                  </div>
                  <input
                    type="submit"
                    className="btn btn-success"
                    value="Save_User"
                  />
                </form>
              </div>
            </Modal.Body>
            {/* <Modal.Footer>
          <Button
            variant="secondary"
            class="btn btn-warning"
            onClick={handleClose}
          >
            reset
          </Button>
          <input type="submit" className="btn btn-success" value="Save_User" />
        </Modal.Footer> */}

            {/* <UserContext.Provider value={user}>
          <Dashboard />
        </UserContext.Provider> */}
          </Modal>
        </>
      ) : (
        <Navigate to="/"  />
      )}
    </>
  );
}

export default AddUser;
