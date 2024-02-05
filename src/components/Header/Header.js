import '../../css/Header.css'
import logo from '../../images/carservice_logo.webp'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import user_logo from '../../images/user_logo.jpg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
const Header = () => {

  const user_info = ["profile", "myApp", "logout"];
  const [profileshow, setProfileShow] = useState(false);

  const handleShow = () => {
    console.log("profile working");
    setProfileShow(!profileshow);
  }
    return (
      <>
        <div className="wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
            <span className="cab_logo">Cab Service</span>
          </div>
          <div className="userinfo">
            {/* <AccountCircleIcon />
            <label htmlFor="#">user</label> */}
            <div className="profile">
              <img
                src={user_logo}
                alt=""
                className="user_logos"
                onClick={handleShow}
              />
              {profileshow ? (
                <div className="subpart">
                  <ul>
                    {user_info.map((item) => (
                      <li key={item}>
                        <NavLink href="#">{item}</NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                "null"
              )}
            </div>
          </div>
        </div>
      </>
    );
}

export default Header;