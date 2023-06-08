import React, { useState } from "react";
import "./signin.css"
import users from "../users.json"
import { useNavigate } from "react-router"
import {toast } from "react-toastify";
import { Button } from "bootstrap";


const SignIn = ({ setUser }) => {

  const [closed, setClosed] = useState(false);

  const [data, setData] = useState({
    username: "",
    password: "",
    errors: {}
  });

  let navigate = useNavigate();

  const showToastMessage=()=>{
    console.log("admin");
    toast.success("Login Sucessful!",{
      position: toast.POSITION.TOP_RIGHT,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    users.users.forEach((user) => {
      if (user.username === data.username && user.password === data.password) {
        setUser(data.username);
        if (user.role === "1") {
          showToastMessage();
          
          navigate("/admin", { replace: true });
        } else {
          showToastMessage();
          navigate("/", { replace: true });
        }
      }
    }
    )
  }

  const handleChange = (e) => {
    //set new data after change 
    setData({
      ...data, [e.target.name]: e.target.value,
    });
  };

  const handlecloseform = () => {
    setClosed(true);
    navigate("/", { replace: true });
  }

  return (
    <div className={closed ? "closed" : "sign"}>
      <section className="signIn">
        <div className="sign-box">
          {/* <div className="myform"> */}
          <form onSubmit={handleSubmit} className="sign-form">
            <div className="mb-4">
              <label htmlFor="username" className="mb-1">Username</label>
              <input
                name="username"
                value={data.username}
                onChange={handleChange}
                type="text"
                className="form-control"
                id="username"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Password" className="form-label mb-1">
                Password
              </label>
              <input
                name="password"
                value={data.password}
                onChange={handleChange}
                type="password"
                className="form-control"
                id="Password"
              />
            </div>

            <div className="sign-button">

              <button type="button" className="btn btn-outline-primary me-3">
                Sign in
              </button>

              <button type="button" className="btn btn-outline-primary" onClick={handlecloseform}>
                Cancel
              </button>
            </div>


          </form>
          {/* </div> */}
          <div className="side-form">
          </div>
        </div>
      </section>
    </div>
  );
}
export default SignIn;






