import React, { useState, useEffect } from "react";
import {issueABook} from "../actions/Issue_action"
import { useDispatch, useSelector } from 'react-redux'
import {Toast} from "react-bootstrap"

const Recom_Book = () => {
    const[title,setTitle] = useState("")
    const[author,setAuthor] = useState("")
    const[publisher,setPublisher] = useState("")
    const [show, setShow] = useState(false);

    const {currentUser} = useSelector(state => state.userLoginReducer)
    const dispatch = useDispatch()

    const userId = currentUser.user._id ;
   const  userBranch  =  currentUser.user.branch ;
   const userName = currentUser.user.name ;

    const PostData = () => {
        const book = { title,author,publisher,userId, userBranch,userName,isRecom:true};
       
        dispatch(issueABook(book));
        setShow(true);
        setAuthor("")
        setTitle("")
        setPublisher("")
    };
    return (
        <div style={{marginTop:"4%"}}>
             <div className=" card col-md-7 m-auto p-5" >
             <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                 <Toast.Body style={{backgroundColor:"green",color:"white",fontSize:"18px"}}>You successfully Recommadation a Book</Toast.Body>
              </Toast>
                 <h3 style={{textAlign:"center",fontFamily:"Oswald",fontSize:"40px"}}>Recommadation a Book</h3>
             <div className="mb-4 mt-2">
                        <input type="text" placeholder="title"
                         onChange={(e) => setTitle(e.target.value)} value={title} className="form-control" style={{height:"60px"}} />
                    </div>
                    <div className="mb-4">
                        <input type="text" placeholder="author" value={author} style={{height:"60px"}} 
                        onChange={(e) => setAuthor(e.target.value)} className="form-control" />
                    </div>
                    <div className="mb-4">
                        <input type="text" placeholder="publisher" value={publisher} style={{height:"60px"}} 
                        onChange={(e) => setPublisher(e.target.value)} className="form-control" />
                    </div>
                    <button className="btn btn-primary " onClick={() => PostData()} 
                    style={{height:"50px",fontFamily:"sans-serif",fontSize:"20px"}} >
                        Sent Request
                    </button>
             </div>
        </div>
    );
};

export default Recom_Book;