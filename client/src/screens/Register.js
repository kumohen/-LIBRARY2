import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../actions/user_action";
import { useDispatch, useSelector } from 'react-redux'
import SignInForm from "../components/Form/Register"

const Register = () => {
    // const [name, setName] = useState("");

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [branch, setBranch] = useState("")
    // const [roll_no, setRoll_no] = useState("")
    // const [year, setYear] = useState('')



    // const dispatch = useDispatch()






    // const PostData = () => {
    //     const user = { name, email, password, branch, roll_no, year };
    //     dispatch(registerUser(user));
    // };

    return (
        <div >
               <div className="LoginPage"></div>
            <div className="login_container">
            <div style={{marginLeft:"44%"}}>
                        <div id="circle"></div>
                          <h3 className="LMS_R">LMS</h3>
                        </div>
            <p style={{color:"white",fontWeight:"800",textAlign:"center"}}>Welcome to Libary
Management System</p>
                {/* <div className="col-md-8 m-auto" >
                    <div className="mb-2">
                        <input type="text" placeholder="name" style={{height:"60px",}}
                         onChange={(e) => setName(e.target.value)} className="form-control" />
                    </div>
                    <div className="mb-2">
                        <input type="text" placeholder="email" style={{height:"60px",}}
                         onChange={(e) => setEmail(e.target.value)} className="form-control" />
                    </div>
                    <div className="mb-2">
                        <input type="text" placeholder="password" style={{height:"60px",}}
                         onChange={(e) => setPassword(e.target.value)} className="form-control" />
                    </div>
                    <div className="mb-2">
                        <input type="text" placeholder="roll_no" style={{height:"60px",}}
                        onChange={(e) => setRoll_no(e.target.value)} className="form-control" />
                    </div>
                    <div className="mb-2">
                        <input type="text" placeholder="branch" style={{height:"60px",}}
                        onChange={(e) => setBranch(e.target.value)} className="form-control" />
                    </div>
                    <div>
                        <input type="text" placeholder="addmission year" style={{height:"60px",}}
                         onChange={(e) => setYear(e.target.value)} className="form-control" />
                    </div>

                     <br />

                    <button className="btn btn-primary " onClick={() => PostData()}>
                        Registration
                    </button>

                </div> */}
                <SignInForm   />
            </div>
        </div>
    );
};



export default Register;