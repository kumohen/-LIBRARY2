import React from 'react';
import  Sidebar from "../components/Sidebar"
import {Switch,Route,Link} from "react-router-dom";
import AddBook from "./AddBook"
import AllBook from "./AllBook"
import AllStudent from "./AllStudent"
import IssueRequest from "./IssueRequest"
import UserHome from "../components/UserHome"
import UserIssuedBook from "./UserIssuedBook"
import Recom_Book from "./Recom_Book"
import RecomdationBook from "./Recommdation"
import Messages from "./Messages"
import AllIssuedBook from "./AllissuedBook"
import Navbar from "../components/Navbar"
import IssueReturn from "./Issue_Return";
import ReturnBook from "./ReturnBook"
import Addemployee from "./Add_Employee"

const Dashboard = () => {
    return (
         <div>
             <div style={{marginBottom:"64px"}}>
               <Navbar  />
             </div>
        
            <div style={{display:"flex"}}>
                  <div style={{height:"940px",marginLeft:"10px",width:"14%",backgroundColor:"#635c5b"}}>
                       <Sidebar  />         
                  </div>
                  <div style={{height:"940px",marginLeft:"10px",width:"80%"}}>
                  <Switch>
                  <Route path="/dashboard/" component={UserHome} exact />
            <Route path="/dashboard/addBook" component={AddBook} exact />
                <Route path="/dashboard/allBook" component={AllBook} exact />
                <Route path="/dashboard/manageStudent" component={AllStudent} exact />
                <Route path="/dashboard/issuedBook" component={UserIssuedBook} exact /> 
                <Route path="/dashboard/allissuedBook" component={AllIssuedBook} exact /> 
                <Route path="/dashboard/RecomBook" component={Recom_Book} exact /> 
                <Route path="/dashboard/Recommandation" component={RecomdationBook} exact /> 
                <Route path="/dashboard/stuReqIssue" exact component={IssueRequest} />
                <Route path="/dashboard/messages" exact component={Messages} />
                <Route path="/dashboard/issue_return" exact component={IssueReturn} />
                <Route path="/dashboard/returnBook" exact component={ReturnBook} />
                <Route path="/dashboard/addEmployee" exact component={Addemployee} />
            </Switch>  
                  </div>
            </div>
        </div>
    );
};

export default Dashboard;