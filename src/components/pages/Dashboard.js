import {
  React,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import dashboardcss from "../../css/dashboard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link, NavLink, useParams } from "react-router-dom";
import AddUser from "./AddUser";
import { getallusers } from "../../services/UserService";
import { deleteUser, getuserbyid } from "../../services/UserService";

import { UserContext } from "./AddUser";
import axios, { formToJSON } from "axios";
import Usermap from "./Usermap";
import EditUser from "./EditUser";
// export const UserIdData = createContext();

function Dashboard({ user_id }) {
  const Userdata = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  // const { id } = useParams();
  // const deleteid = props;
  // console.log("updated user id" + user_id);

  //fetch users all record
  const fetchData = async (e) => {
    setLoading(true);
    try {
      const response = await getallusers();
      setUsers(response);
      console.log(
        "data is comming from database as a response  formik: " +
          JSON.stringify(response)
      );
      // fetchData();
      setIsLoggedIn(false);
      // setUsers(response);
      // console.log("user data after set : " + users);
    } catch (errors) {
      console.log(errors);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // delete user
  const handleDelete = (id) => {
    if (id) {
      try {
        console.log("id is find" + id);

        deleteUser(id);
        fetchData();
      } catch (error) {
        console.log(error);
      }
    }
  };

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
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td>{user.status}</td>
                  <td>{user.role}</td>
                  <td>{user.contact}</td>
                  <td className="actions">
                    <Link
                      className="btn btn-primary"
                      to={`/edit-user/${user.id}`}
                    >
                      <EditIcon />
                    </Link>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleDelete(user.id)}
                    >
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
