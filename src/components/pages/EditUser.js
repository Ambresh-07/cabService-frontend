import React, { useContext, useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { userSchema } from "../../schemas/AddUserSchemas";
import { useNavigation, useParams } from "react-router-dom";
import Dashboard from "../../components/pages/Dashboard";
import { UserIdData } from "../../components/pages/Dashboard";
import { getuserbyid, saveuser,updateUser } from "../../services/UserService";
import axios from "axios";


function EditUser() {
  // const navigate = useNavigation();
  // const Userdata = useContext(UserIdData);
  const { id } = useParams();
  console.log("user id " + id);
  // <Dashboard id={id} />
  const [show, setShow] = useState(true);
  const [check, setCheck] = useState(true);
  const [loading, setLoading] = useState(true);
  const handleShow = () => setShow(true);
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "", // Fixed typo here
    address: "",
    status: "",
    role: "",
  });
  // const [firstname, lastname, email, contact, address, status,role] = users;

  //get data form user id
  const getUserById = async () => {
    setLoading(true);
    console.log("id get is working")
    try {
      const res = await getuserbyid(id);
      setUser({...user,
        firstname:res.firstname,
        lastname:res.lastname,
        email:res.email,
        contact:res.contact,
        address:res.address,
        status:res.status,
        role:res.role,
      });
      // fetchData();
      console.log("user data for edit " + JSON.stringify(res));
      
    } catch (errors) {
      console.log(errors);
    }
    setLoading(false);
  };
  useEffect(() => {
    // fetchData();
    if (id) {
      getUserById();
    }
  }, []);

  //update user
  //    const updateRecord = async (user,id) => {
  //   try {
  //     const response = await axios.put(
  //       "http://localhost:8080/api/"+id,
  //       user
  //     );
  //     // props.handleAddEdit();
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
   

  // const handleClose = () => setShow(false);
  const { values, errors, handleSubmit, handleChange, handleBlur, touched } =
    useFormik({
        
       
      // validationSchema: userSchema, // Assuming you have a validation schema
      onSubmit: (e, values) => {
        // Handle form submission logic here
        e.preventDefault();
        // console.log("submit calling")
        // setShow(false);
        // // updateRecord(user,id);
        // updateUser(user,id);
        console.log("data get : "+JSON.stringify(user));
        
     
      },
    });

    const UpdateEditUser=()=>{
      //  setShow(false);
        console.log("data get : "+user)
        updateUser(user,id);
    

    }
  const handleClose = () => {
    setShow(false);
    // navigate("/");
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <form onSubmit={UpdateEditUser}>
              <div className="row">
                <div className="col-6">
                  <label htmlFor="">first_Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstname"
                    id="firstname"
                    value={user.firstname}
                    onChange={e=>setUser({...user,firstname:e.target.value})}
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
                    value={user.lastname}
                    onChange={e=>setUser({...user,lastname:e.target.value})}
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
                    value={user.email}
                    onChange={e=>setUser({...user,email:e.target.value})}

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
                    value={user.contact}
                    onChange={e=>setUser({...user,contact:e.target.value})}

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
                    value={user.address}
                    onChange={e=>setUser({...user,address:e.target.value})}

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
                    value={user.status}
                    onChange={e=>setUser({...user,status:e.target.value})}

                    onBlur={handleBlur}
                  >
                    <option selected>--select--</option>
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
                    value={user.role}
                    onChange={e=>setUser({...user,role:e.target.value})}

                    onBlur={handleBlur}
                  >
                    <option selected>--select--</option>
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
                value="Update_User"
              />
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditUser;
