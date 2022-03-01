import React, { useEffect, useState } from 'react'
import "../css/record.css"
import EditRecord from "../EditRecord"
const RecordPage = () => {
  const [record, setRecord] = useState([]);

  //Delete Request from a Server
  const deleteRec = async(id) =>{
    try{
     const response = await fetch(`http://localhost:5000/record/${id}`, {
            method: "DELETE"
     })
     setRecord(record.filter(rec=> rec.s_no !== id))
    } catch(err) {
      console.log(err);
    }
  }

  //Get Request from a Server
const getAllRec = async() => {
  try{
    const response = await fetch("http://localhost:5000/record");
    const jsonData = await response.json();
    setRecord(jsonData)
  } catch(err){
    console.log(err);
  }
}
  useEffect(()=>{
    getAllRec();
  }, [])
  return (
   <>
   <div className="container2">
     <h1 className='title my-4'>All Students Records(Edit/Delete)</h1>
     <div className='tb'>
      <table className="table table-danger table-striped">
   <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Discipline</th>
      <th scope="col">Fees</th>
      <th scope="col">Status</th>
      <th scope="col">Edit</th>
      <th scope="col">Remove</th>
    </tr>
  </thead>
  <tbody>
  {record.map((rec)=> (
        <tr key = {rec.s_no}>
      <th scope="row">{rec.s_no}</th>
      <td>{rec.first_name}</td>
      <td>{rec.last_name}</td>
      <td>{rec.discipline}</td>
      <td>${rec.fees}</td>
      <td>{rec.status}</td>  
      <td><EditRecord records={rec}/></td>
      <td><button type="button" className="btn2 btn-danger btn-sm" onClick={()=> deleteRec(rec.s_no)}>Delete</button></td>
      </tr>
  ))}
  </tbody>
</table>
</div>
</div>
   </>
  )
}

export default RecordPage