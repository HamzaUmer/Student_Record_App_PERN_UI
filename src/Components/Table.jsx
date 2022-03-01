import React, { useEffect, useState } from 'react'
import './css/table.css'

const Table = () => {
  const [record, setRecord] = useState([]);

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
   <div className='container1'>
     <h1>Students Record Table</h1>
   <table className="table table-danger table-striped tb">
   <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Discipline</th>
      <th scope="col">Fees</th>
      <th scope="col">Status</th>
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
      </tr>
  ))}
  </tbody>
</table>
</div>
   </>
  )
}

export default Table