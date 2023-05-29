import React from "react";
import back from "../../assets/images/my-account.jpg";
import "./login.css";
import { useDispatch } from "react-redux";
import { authActions } from "../../components/store/authSlice";
const Login = () => {

const dispatch = useDispatch()
 const handelSubmit =(e)=>{
  e.preventDefault()
  dispatch(authActions.login())
 }

  return (
    <div>
      <section className="login">
        <div className="container">
          <div className="backImg">
            <img src={back} alt="" />
            <div className="text">
              <h3>Login</h3>
              <h1>My Account</h1>
            </div>
          </div>
          <form onSubmit={handelSubmit}>
            <span>Username or Email Address</span>
            <input type="text" required />
            <span>Password</span>
            <input type="password" required />
            <button className="button" >Login</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
