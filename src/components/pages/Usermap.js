import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { axios } from "axios";
import Dashboard from "./Dashboard";

function Usermap({ user }) {
  const [deleteid, setDeleteid] = useState("");
  //delete  user
  const handleDelete = (id) => {
    setDeleteid(id);
    console.log("id is in usermap" + id);
  };
        <Dashboard value={deleteid} />;


  return (
    <>
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
          {/* <Link className="btn btn-primary" to={`/show-user/${user.id}`}>
            <EditIcon />
          </Link> */}
          <Link className="btn btn-primary" to={`/edit-user/${user.id}`}>
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
    </>
  );
}

export default Usermap;
