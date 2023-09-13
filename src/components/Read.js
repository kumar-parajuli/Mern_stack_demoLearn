import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailSlice";
import { Link } from "react-router-dom";
import CustomerModal from "./CustomModal";

const Read = () => {
  const dispatch = useDispatch();

  const { users, loading, searchData } = useSelector((state) => state.app);
  const [id, setId] = useState();
  const [showPupup, setShowPupup] = useState(false);
  const [radioData, setRadioData] = useState("");

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <div>
      {showPupup && (
        <CustomerModal
          id={id}
          showPupup={showPupup}
          setShowPupup={setShowPupup}
        />
      )}

      <h2>Edit Your Data</h2>
      <input
        type="radio"
        name="gender"
        className="form-check-input"
        checked={radioData === ""}
        onChange={(e) => setRadioData("")}
      />
      <label className="form-check-label">ALL</label>
      <input
        className="form-check-input"
        name="gender"
        type="radio"
        value="Male"
        checked={radioData === "Male"}
        onChange={(e) => setRadioData(e.target.value)}
      />

      <label className="form-check-label">Male </label>

      <input
        className="form-check-input"
        name="gender"
        value="Female"
        checked={radioData === "Female"}
        type="radio"
        onChange={(e) => setRadioData(e.target.value)}
      />

      <label className="form-check-label">Female </label>

      <div>
        {users &&
          users
            .filter((ele) => {
              if (searchData.length === 0) {
                return ele;
              } else {
                return (
                  ele.name.toLowerCase().includes(searchData.toLowerCase()) ||
                  ele.email.toLowerCase().includes(searchData.toLowerCase())
                );
              }
            })
            .filter((ele) => {
              if (radioData === "Male") {
                return ele.gender === radioData;
              } else if (radioData === "Female") {
                return ele.gender === radioData;
              } else return ele;
            })
            .map((ele) => (
              <div key={ele.id} className="card w-50 mx-auto">
                <div className="card-body">
                  <h5 className="card-title">Username:{ele.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Email:{ele.email}
                  </h6>
                  <p className="card-text">Gender:{ele.gender}</p>
                  <button
                    className="card-link"
                    onClick={() => [setId(ele.id), setShowPupup(true)]}
                  >
                    View
                  </button>
                  <Link to={`/edit/${ele.id}`} className="card-link">
                    Edit
                  </Link>
                  <Link
                    onClick={() => dispatch(deleteUser(ele.id))}
                    to="/"
                    className="card-link"
                  >
                    Delete
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Read;
