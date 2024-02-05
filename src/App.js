import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import User from "./components/pages/User";
import Dashboard1 from "./components/pages/Dashboard";
import Driver from "./components/pages/Driver";
import Employee from "./components/pages/Employee";
import Trip from "./components/pages/Trip";
import Main from "./components/Sidebar/MainContent/Main";
import AddUser from "./components/pages/AddUser";
import Login from "./components/pages/Login";

function App() {
  return (
    <>
      {/* <Header /> */}
      <div className="side_main">
        {/* <Sidebar /> */}
        <Login />

        {/* <Routes>
          <Route path="/" element={<Dashboard1 />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/employee" element={<Employee />}></Route>
          <Route path="/driver" element={<Driver />}></Route>
          <Route path="/trip" element={<Trip />}></Route>
          <Route path="/addUser" element={<AddUser />}></Route>
        </Routes> */}
      </div>
    </>
  );
}

export default App;
