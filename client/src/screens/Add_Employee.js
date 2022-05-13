import React, { useState } from 'react';
import {registerUser} from "../actions/user_action"
import {useDispatch} from "react-redux"
import {Toast} from "react-bootstrap"
const Addemployee = () => {
    const[name,setName] = useState("")
    const [password, setPassword] = useState("");
    const [emp_id, setEmpId] = useState("")
    const[show,setShow] = useState(false) 
    const dispatch = useDispatch()

    const PostData = () => {
        const user = { password,roll_no: emp_id,name ,isAdmin:true}

        
         dispatch(registerUser(user));
         setName("")
            setPassword("")
            setEmpId("")
            setShow(true)
    };

   

    return (
        <div>
           
             <div style={{width:"50%",margin:"auto",border:"2px solid black",padding:"2%",marginTop:"5%"}}>
             <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                 <Toast.Body style={{backgroundColor:"green",color:"white",fontSize:"18px"}}>One Book Added</Toast.Body>
              </Toast>
             <h3 style={{textAlign:"center"}}>Add a Employee </h3>
             <div style={{marginTop:"20px"}}>
                        <input type="text" className="form-control" style={{height:"60px",borderRadius:"20px"}}
                         placeholder="Employee Name" value={name} onChange={(e) => setName(e.target.value)} />
             </div>
            
                    <br />
                    <div>
                        <input type="text"  style={{height:"60px",borderRadius:"20px"}}
                        className="form-control"  placeholder="password"
                         value={password} onChange={(e) => setPassword(e.target.value)} />
                        
                    </div>
                    <br />
                    <div style={{marginTop:"20px"}}>
                        <input type="text" className="form-control" style={{height:"60px",borderRadius:"20px"}}
                         placeholder="Employee Id" value={emp_id} onChange={(e) => setEmpId(e.target.value)} />
             </div>
             <br />
             <br />
             <button style={{width:"100%",height:"60px",color:"white",borderRadius:"20px",backgroundColor:"#5DB9F1"}} onClick={() => PostData()}>
                        Add Employee 
                    </button>
             </div>
        </div>
    );
};

export default Addemployee;