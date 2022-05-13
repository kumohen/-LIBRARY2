import React,{useEffect} from 'react';
import {userProfile} from "../actions/user_action"
import { useDispatch, useSelector } from 'react-redux'
import Image from "../Images/profile2.png"
const UserHome = () => {
    const dispatch = useDispatch() ;
    useEffect(()=>{
        dispatch(userProfile())
    },[])
    const {currentUser} = useSelector(state => state.userProfileReducer) ;
    console.log("UserHome",currentUser)
    return (
        <div className="col-md-4 m-auto">
              <div className="card mt-2">
                  <img src={Image} alt="mohen mondal" style={{height:"250px",width:"250px",borderRadius:"50%",marginLeft:"23%"}} />
                  <h3 style={{textAlign:"center"}}>{currentUser && currentUser[0] && currentUser[0].name}</h3>
                  <div style={{backgroundColor:"#2c5c69",padding:"20px"}}>
                   { currentUser && currentUser[0] && currentUser[0].isAdmin ?
                    <p style={{fontSize:"22px",color:"white"}}> <b>Employee Id : </b>{currentUser && currentUser[0] && currentUser[0].roll_no}</p>
                   : <>
                      <p style={{fontSize:"22px",color:"white"}}> <b> Email Id :</b> {currentUser && currentUser[0] && currentUser[0].email}</p>
                  <p style={{fontSize:"22px",color:"white"}}> <b>Phone Number :</b> {currentUser && currentUser[0] && currentUser[0].phone_no}</p>
                  <p style={{fontSize:"22px",color:"white"}}> <b>Enrollment No : </b>{currentUser && currentUser[0] && currentUser[0].roll_no}</p>
                  <p style={{fontSize:"22px",color:"white"}}><b>Branch : </b>{currentUser && currentUser[0] && currentUser[0].branch}</p>
                  <p style={{fontSize:"22px",color:"white"}}> <b>Addmission Year :</b> {currentUser && currentUser[0] && currentUser[0].addmission_year}</p>
                   </>}

                 
                  </div>
                  {/* <p>{currentUser && currentUser[0] && currentUser[0].name}</p>
                  <p>{currentUser && currentUser[0] && currentUser[0].email}</p>
                  <p>{currentUser && currentUser[0] && currentUser[0].phone_no}</p>
                  <p>{currentUser && currentUser[0] && currentUser[0].roll_no}</p>
                  <p>{currentUser && currentUser[0] && currentUser[0].branch}</p>
                  <p>{currentUser && currentUser[0] && currentUser[0].addmission_year}</p> */}
              </div>
        </div>
    );
};

export default UserHome;