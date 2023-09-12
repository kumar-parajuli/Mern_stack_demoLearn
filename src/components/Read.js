import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailSlice";
import { Link } from "react-router-dom";
import CustomerModal from "./CustomModal";

const Read = () => {
  const dispatch = useDispatch();

  const { users, loading } = useSelector((state) => state.app);
  const [id, setId] = useState();
  const [showPupup, setShowPupup] = useState(false);

  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <div>
      {showPupup && <CustomerModal id={id} showPupup={showPupup} setShowPupup={setShowPupup}/>}
      <h2>Edit Your Data</h2>
      <div>
        {users &&
          users.map((ele) => (
            <div key={ele.id} className="card w-50 mx-auto">
              <div className="card-body">
                <h5 className="card-title">Username:{ele.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Email:{ele.email}</h6>
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
                <Link onClick={()=>dispatch(deleteUser(ele.id))} to="/" className="card-link">
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
