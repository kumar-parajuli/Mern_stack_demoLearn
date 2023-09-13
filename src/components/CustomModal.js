import React from "react";
import "./CustomModal.css";
import { useSelector } from "react-redux";

const CustomerModal = ({ id, showPupup, setShowPupup }) => {
  //for all user data
  const allusers = useSelector((state) => state.app.users);
  //for only single user data
  const singleUser = allusers.filter((ele) => ele.id === id);
  console.log("singleuser", singleUser);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={() => setShowPupup(false)}> close</button>
        <h2>{singleUser[0].name}</h2>
        <h3>{singleUser[0].email}</h3>
        <h4>{singleUser[0].age}</h4>
        <p>{singleUser[0].gender}</p>
      </div>
    </div>
  );
};

export default CustomerModal;
