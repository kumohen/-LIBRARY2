import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';


const Navbar = () => {
 
    const {currentUser} = useSelector(state => state.userLoginReducer) ;
    console.log(currentUser)
    return (
        <div >
           <nav className=" shadow   bg-white rounded navbar fixed-top navbar-white " style={{height:"60px"}}>
            <div className="container-fluid">
               
                <a className="navbar-brand" href="/dashboard" 
                style={{fontFamily:"oswald",fontSize:"30px",marginTop:"-4px"}}>Libary Management System</a>
                <p style={{textAlign:"center",marginRight:"10%",fontFamily:"sans-serif",fontSize:"24px"}}>
                <i className="far fa-user "></i> { " "}{ currentUser && currentUser.user.name.split(" ")[0]}</p>
            </div>
        
          
          
            </nav> 
        </div>
    );
};

export default Navbar;