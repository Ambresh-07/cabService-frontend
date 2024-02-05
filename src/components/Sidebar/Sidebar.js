import { NavLink } from "react-router-dom";
import "../../css/sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <h2>MyApp</h2>
        <ul>
          <li>
            <NavLink to="/">
              <i className="icons">
                <DashboardIcon />
              </i>
              dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="user">
              <i className="icons">
                <PersonIcon />
              </i>
              User Management
            </NavLink>
          </li>
          <li>
            <NavLink to="employee">
              <i className="icons">
                <PeopleAltIcon />
              </i>
              Employee Management
            </NavLink>
          </li>
          <li>
            <NavLink to="driver">
              <i className="icons">
                <DirectionsCarIcon />
              </i>
              Driver Management
            </NavLink>
          </li>
          <li>
            <NavLink to="trip">
              <i className="icons">
                <LoyaltyIcon />
              </i>
              Trip
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
