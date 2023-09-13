import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
import { useNavigate } from "react-router-dom";
import "./create.css";

const Create = () => {
  const [users, setUsers] = useState({});
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("users...", users);
    dispatch(createUser(users));
    navigate("/read");
  };

  return (
    <div className="maincontainer">
      <div className="container">
        <h2 className="my-2">Fill the Data</h2>
        <form
          className=" container w-50 mx-auto my-56 "
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={getUserData}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={getUserData}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="text"
              name="age"
              className="form-control"
              onChange={getUserData}
              required
            />
          </div>

          <div className="Btnradio" >
            <input
              className="form-check-input"
              name="gender"
              type="radio"
              value="Male"
              onChange={getUserData}
              required
            />
            <label className="form-check-label">Male</label>
            {/* </div >
            <div className=" Btnradio "> */}
            <input
              className="form-check-input"
              name="gender"
              type="radio"
              value="Female"
              onChange={getUserData}
            />
            <label className="form-check-label">Female</label>
          </div>
          <br></br>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
