import React, { useState } from 'react'
import "./css/inputRecord.css"

const InputRecord = () => {
    const [first_name, setFname] = useState("");
    const [last_name, setLname] = useState("");
    const [discipline, setDis] = useState("");
    const [fees, setFees] = useState(0);
    const [status, setStatus] = useState("");
   
    //Post Request from a Server
    const submitInfo = async(e) => {
        e.preventDefault();
        try{
           const body = {first_name, last_name,  discipline, fees, status};
           const response = await fetch("http://localhost:5000/record", {
               method: "POST",
               headers: {"Content-Type": "application/json"},
               body: JSON.stringify(body)
           });
           console.log(response);
           setFname("");
           setLname("");
           setDis("");
           setFees("");
           setStatus("");
           window.location = ("/")
        } catch(err) {
            console.log(err)
        }
    }
  return (
    <>
    <div className="container">
        <h1 className='heading my-4'>Enter Student Record</h1>
        <form onSubmit={submitInfo}>
            <div className='f1'>
        <div className="mb-3">
            <input type='text' className="form-control" placeholder='First Name' value={first_name} onChange={(e)=> setFname(e.target.value)}/>            
        </div>
        <div className="mb-3">
            <input type='text' className="form-control" placeholder='Last Name' value={last_name} onChange={(e)=> setLname(e.target.value)}/>            
        </div>
        </div>
        <div className='f1'>
        <div className="mb-3">
            <input type='text' className="form-control" placeholder='Discipline' value={discipline} onChange={(e)=> setDis(e.target.value)}/>            
        </div>
        <div className="mb-3">
            <input type='text' className="form-control" placeholder='Total Fees' value={fees} onChange={(e)=> setFees(e.target.value)}/>            
        </div>
        </div>
        <select className="form-select sel" aria-label="Default select example" onChange={(e)=> setStatus(e.target.value)}>
        <option selected value="Submitted">Submitted</option>
        <option value="Not Submitted" >Not Submitted</option>
        </select>
       < button className="btn btn-danger my-4" type="submit">Add Data</button>
        </form>
    </div>
    </>
  )
}

export default InputRecord