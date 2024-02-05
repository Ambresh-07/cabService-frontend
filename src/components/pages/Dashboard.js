import { React, useContext, useEffect, useState } from "react";
import dashboardcss from "../../css/dashboard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { NavLink } from "react-router-dom";
import AddUser from "./AddUser";
import { getallusers } from "../../services/UserService";
import { deleteUser } from "../../services/UserService";

import { UserContext } from "./AddUser";
import axios, { formToJSON } from "axios";
function Dashboard() {
  const Userdata = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getallusers();
        // setUsers(response);
        console.log(
          "data is comming from database as a response : " +
            JSON.stringify(response)
        );
        setUsers(response);
        console.log("user data after set : " + users);
      } catch (errors) {
        console.log(errors);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log("user data after set : " + users);

  // delete user
  const deleteUserData = (e, id) => {
    e.preventDefault();
    console.log("working...");
    // const deluser = async () => {
    //   try {
    //     const users = await deleteUser(id);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // deluser();
  };

  // const url = "http://localhost:8080/api/user";
  // const url = "http://localhost:8080/api/3";

  // useEffect(() => {
  //   fetch("http://localhost:8080/api/user")
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log(
  //         "data is comming from database as a response: " +
  //           JSON.stringify(response)
  //       );
  //       setUsers(response);
  //       console.log("response after setUser   : " + users);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }, []);

  // console.log("data is "+users);

  return (
    <>
      <div className="contain">
        <div className="add_user">
          <AddUser />
        </div>

        <div className="tables_User">
          <table className="table table-success table-striped">
            <thead>
              <tr>
                <th>id</th>
                <th>first_Name</th>
                <th>Last_Name</th>
                <th>email</th>
                <th>Address</th>
                <th>Status</th>
                <th>Role</th>
                <th>Contact</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td>{user.status}</td>
                  <td>{user.role}</td>
                  <td>{user.contact}</td>
                  <td className="actions">
                    <i className="edit itemaction">
                      <EditIcon />
                    </i>
                    <i className="delete itemaction">
                      <DeleteIcon onclick={(e) => deleteUserData(e, user.id)} />
                    </i>
                  </td>
                </tr>
              ))}

              <tr>
                <td>0</td>

                <td>"demo-name"</td>
                <td>"demo-lastname"</td>
                <td>"abg@gmail.com</td>
                <td>9876543145</td>
                <td>pune</td>
                <td>status-active</td>
                <td>status-role</td>
                <td className="actions">
                  <i className="edit itemaction">
                    <EditIcon />
                  </i>
                  <i className="delete itemaction">
                    <DeleteIcon />
                  </i>
                </td>
              </tr>
              {/* ))}  */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
