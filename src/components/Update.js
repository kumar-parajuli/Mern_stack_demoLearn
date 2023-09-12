import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const Update = () => {
    const{id} = useParams();
const[updateData, setUpdateData] = useState()
    const {users,loading} = useSelector((state)=>state.app)

    useEffect(() => {
       if(id){
        const singleUser = users.filter((ele)=>ele.id === id)
        setUpdateData(singleUser[0])
       }
    }, [])
    

const newData =(e) =>{
  setUpdateData({...updateData,[e.target.name] : e.target.value})
}
console.log("update data",updateData)
  return (
    <div className='maincontainer'>
      <div className="container">
      <h2 className="my-2">Update the data</h2>
<form className=" container w-50 mx-auto my-56 " >
         <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" name='name' className="form-control" 
        value={updateData && updateData.name} 
        onChange={newData}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="email" name='email' className="form-control"
        value={updateData && updateData.email}
        onChange={newData}

        />
      </div>
      <div className="mb-3">
        <label className="form-label">Age</label>
        <input type="age" name='age' className="form-control"
        value={updateData && updateData.age}
        onChange={newData}
          />
      </div>
      
      <div className=" Btnradio ">
  <input className="form-check-input" name="gender" type="radio"   value="Male" 
   checked={updateData && updateData.gender ==='Male'}
   onChange={newData}
  />
  <label className="form-check-label" >
    Male
  </label>

  <input className="form-check-input" name="gender"  type="radio" value="Female" 
   checked={updateData && updateData.gender ==='Female'}
   onChange={newData}
  />
  <label className="form-check-label" >
    Female
  </label>
</div>
<br></br>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    </div>
    </div>
  )
}

export default Update