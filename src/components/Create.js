import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";

const Create = () => {

const [users, setUsers]= useState({});
const dispatch = useDispatch()


const  getUserData=(e) =>{
    setUsers({...users,[e.target.name] : e.target.value})

}
const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("users...",users)
dispatch(createUser(users))
}



  return (
    <form className=" container w-50 mx-auto my-56 " onSubmit={handleSubmit}>
         <div class="mb-3">
        <label class="form-label">Name</label>
        <input type="name" name='name' class="form-control" onChange={getUserData} />
      </div>
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input type="email" name='email' class="form-control" onChange={getUserData} />
      </div>
      <div class="mb-3">
        <label class="form-label">Age</label>
        <input type="age" name='age' class="form-control" onChange={getUserData} />
      </div>
      
      <div class="  mb-3">
  <input class="form-check-input" name="gender" type="radio"   value="Male"  onChange={getUserData}/>
  <label class="form-check-label" >
    Male
  </label>
</div>
<div class="  mb-3">
  <input class="form-check-input" name="gender"  type="radio" value="Female"  checked onChange={getUserData}/>
  <label class="form-check-label" >
    Female
  </label>
</div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Create;
