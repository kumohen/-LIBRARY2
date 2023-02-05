import React,{useEffect,useState} from 'react';
import {getUserIssuedBook ,singleissueABook ,issueABookReturn,returnReqAction} from "../actions/Issue_action"
import { useDispatch, useSelector } from 'react-redux'
import {Modal,Button} from "react-bootstrap"
import Moment from 'react-moment';
import moment from 'moment';

const UserIssuedBook = () => {
    const dispatch = useDispatch();
      useEffect(()=>{
        dispatch(getUserIssuedBook())
      },[])
      const [show, setShow] = useState(false);
      const [date,setDate] = useState(null)
      const [dateTo,setDateTo] = useState(null)
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      
    const {userIssuedBook} = useSelector(state => state.userIssuedBookReducer)
    const {singleIsBook} = useSelector(state => state.singleIssuedBookReducer)
     
    const issuedBook = userIssuedBook && userIssuedBook.filter(item => item.isIssue);
   
    const callantherFunction = (postId)=>{
        dispatch(singleissueABook(postId))
    }
    
     const handleModal = (postId,cDate) => {
         setDate(cDate) 
        //  cDate.setDate(cDate.getDate() + 7);
        //  console.log(cDate)
         setShow(true);
         callantherFunction(postId)
     }
    var dateFrom ;
    var dayDiff ;
    const now = new Date()
  if(date){
    //dateFrom = moment(date + 7 * 24 * 3600 * 1000).format('YYYY-MM-DD');
    var result = new Date(date) ;
    result.setDate(result.getDate() + 7);
    dateFrom= result ;

    var today = moment(new Date());
    var end = moment(result); // another date
var duration = moment.duration(today.diff(end));
var days = duration.asDays();
dayDiff = days
      
  }


  const hanndleReqandReturn = (book)=>{
      dispatch(issueABookReturn(book.bookId))

       dispatch(returnReqAction(book))
  }
  
 
 
    return (
        <div className="col-md-10 m-auto pt-4">
          {!issuedBook.length  ? <>
          <div className="bg-success p-2 text-center">
          <h4 style={{textAlign:"center",fontFamily:"sans-serif",color:"white"}}>Yet you havn't Issued Book</h4>
          </div>
          
          </> : 
          <>
            <h4 style={{textAlign:"center",fontFamily:"sans-serif"}}>My Issued Book</h4>
            <table  className='table table-bordered table-responsive-sm'>

<thead className='thead-dark bg-info'>
    <tr>
        <th style={{textAlign:"center"}}>Book</th>
        <th style={{textAlign:"center"}}>Author</th>
        <th style={{textAlign:"center"}}>Publisher</th>
        <th style={{textAlign:"center"}}>Actions</th>
    </tr>
</thead>
<tbody>
    
{issuedBook && issuedBook.map(book=>{

    return <tr key={book._id}>
        <td style={{textAlign:"center"}}>{book.title}</td>
        <td style={{textAlign:"center"}}>
            {book.author}
        </td >
        <td style={{textAlign:"center"}}>
            {book.publisher}
        </td>
       
        <td style={{textAlign:"center"}}>
            {/* <i className='fa fa-trash m-1' onClick={()=> console.log("okk")}></i> */}
             {/* <button onClick={() => console.log("")} className="btn btn-success">Renew</button> */}
             <button onClick={() => hanndleReqandReturn(book)} className="btn btn-danger mr" style={{marginRight:"5px"}}>Return </button>
             <button onClick={() => handleModal(book.bookId,book.createdAt)} className="btn btn-success">Details</button>
        </td>

    </tr>

})}
</tbody>

</table>
      <div>
      <Modal show={show} onHide={handleClose}>
        
        <Modal.Body>
            <h3><b>Book Name : </b>{singleIsBook && singleIsBook.title}</h3>
            <p>  <b>Author :</b> {singleIsBook && singleIsBook.author}</p>
            <p> <b>Publisher : </b>{singleIsBook && singleIsBook.publisher}</p>
            <p> <b>Originally published: </b>{singleIsBook && singleIsBook.year}</p>
            {/* <p>{date && date.substring(0,10)}</p> */}
            <p> <b>Issued Date:</b>{date &&  <Moment format="YYYY-MM-DD">{date}</Moment>}</p>
          
            <p> <b>Return Date :</b> {date &&  <Moment format="YYYY-MM-DD">{dateFrom}</Moment>}</p>
          
          
            <p>  {Math.floor(dayDiff) > 0 ?Math.floor(dayDiff) : null }  </p>
            <h3> Fine : {Math.floor(dayDiff) > 0 ?Math.floor(dayDiff) * 15 : 0 } </h3>
            {/* <p> {dateFrom && dateFrom}</p> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
      
        </Modal.Footer>
      </Modal>
      </div>
       </> }
        </div>
    );
};

export default UserIssuedBook;
