import React,{useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import "./css/editRecord.css"

const EditRecord = ({records}) => {
    const [first_name, setFname] = useState(records.first_name);
    const [last_name, setLname] = useState(records.last_name);
    const [discipline, setDis] = useState(records.discipline);
    const [fees, setFees] = useState(records.fees);
    const [status, setStatus] = useState(records.status);
    const [open, setOpen] = useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const updateStudent = async(e)=>{
    e.preventDefault();
    try{
      const body = {first_name, last_name,  discipline, fees, status};
      const response = await fetch(`http://localhost:5000/record/${records.s_no}`,{
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body)
     });
     window.location="/allRecord"
    }catch(err){
        console.log(err);
    }
}
  return (
   <>
<Button variant="contained" color="success" size="small" onClick={handleClickOpen}>Edit</Button>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Student Information</DialogTitle>
        <DialogContent>
        <div className='form-style'>
         <TextField
           required
           placeholder='First Name'
           value={first_name}
           onChange={(e)=> setFname(e.target.value)}
         />
         <TextField
           required
           placeholder='Last Name'
           value={last_name}
           onChange={(e)=> setLname(e.target.value)}
         />
         </div>
         <div className='form-style'>
         <TextField
           required
           placeholder='Discipline'
           value={discipline}
           onChange={(e)=> setDis(e.target.value)}
         />           
         <TextField
           required
           placeholder='Fees'
           value={fees}
           onChange={(e)=> setFees(e.target.value)}
         />
         </div>
         <div className='form-style1'>
         <FormControl fullWidth>
         <InputLabel id="demo-simple-select-label">Status</InputLabel>
         <Select
            labelId="demo-simple-select-label"
            onChange={(e)=> setStatus(e.target.value)}
            value={status}
        >
            <MenuItem selected value="Submitted">Submitted</MenuItem>
            <MenuItem value="Not Submitted">Not Submitted</MenuItem>
        </Select>
        </FormControl>
         </div>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" size="small" onClick={handleClose}>Cancel</Button>
          <Button variant="contained" color="success" size="small" onClick={(e)=> updateStudent(e)}>Edit</Button>
        </DialogActions>
      </Dialog>
   </>
  )
}

export default EditRecord