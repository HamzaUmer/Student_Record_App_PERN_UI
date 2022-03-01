import React from 'react'
import "./css/navbar.css"
import { Link, useNavigate} from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate();
  return (
   <>
<nav className='navbar navbar-dark bg-danger'>
  <div className='container-fluid'>
    <Link className="navbar-brand navbare" to="/">Student Record App</Link>
    <div className='b-edit'>
    < button className="btn1 btn-dark my-4" type="submit" onClick={()=> navigate('/allRecord')}>All Record</button>
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar