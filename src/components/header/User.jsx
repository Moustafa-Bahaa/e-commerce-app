import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5/index.esm";
import { BsBagCheck } from "react-icons/bs/index.esm";
import { AiOutlineHeart } from "react-icons/ai";
import { GrHelp } from "react-icons/gr/index.esm";
import { BiLogOut } from "react-icons/bi";
import {Link} from "react-router-dom"
import { useDispatch } from "react-redux";
import { authActions } from "../../components/store/authSlice";

const User = () => {
  const user = true;
  const [profileOpen, setProfileOpen] = useState(false);

  const close = () => {
    setProfileOpen(null);
  };
  const dispatch = useDispatch()
 const logOutHandler =()=>{
  dispatch(authActions.logout())
 }

  return (
    <div className="profile">
      {user ? (
        <div>
          <button className="img" onClick={() => setProfileOpen(!profileOpen)}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
              alt=""
            />
          </button>
          {profileOpen && (
            <div className="openProfile boxItems" onClick={close}>
              <div className="image">
                <Link to="/account">
                <div className="img">
                  <img src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png" />
                </div>
                </Link>
                <div className="text">
                  <h4>Moustafa Bahaa</h4>
                  <label htmlFor=""> zagazig,sharkia,egypt </label>
                </div>
              </div>
              <Link to="/login">
                <button className="box">
                  <IoSettingsOutline className="icon" />
                  <h4>My Account</h4>
                </button>
              </Link>
              <button className="box">
                <BsBagCheck className="icon" />
                <h4>My Orders</h4>
              </button>
              <button className="box">
                <AiOutlineHeart className="icon" />
                <h4>WishList</h4>
              </button>
              <button className="box">
                <GrHelp className="icon" />
                <h4>help</h4>
              </button>
              <button className="box" onClick={logOutHandler}>
                <BiLogOut className="icon" />
                <h4>Log Out</h4>
              </button>
            </div>
          )}
        </div>
      ) : (
        <button>My Account</button>
      )}
    </div>
  );
};

export default User;
