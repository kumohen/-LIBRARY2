export const issueRqquestReducer = (state={issueBookItems:[]},action)=>{
    switch(action.type){
        case 'ISSUE_REQUEST':
            return {...state , loading:true}    
        case 'ISSUE_REQUEST_SUCCESS':
            return {...state,
                issueBookItems:[...state.issueBookItems ,action.payload ],
                loading:false
            }
       
           
       
        default:
            return state         
    }
}

export const getAllIssueBookReqReducer = (state={issuebooks:[]},action)=>{
    switch(action.type){
        case 'GET_All_ISSUES_REQUEST':
            return {...state,loading:true}
        case 'GET_All_ISSUES_SUCCESS':
            return {
                issuebooks:action.payload,loading:false
            }    
        case 'GET_All_ISSUES_FAILED':
            return {error:action.payload,loading:false}
        default:
            return state         
    }
}
export const getAllReturnBookReqReducer = (state={returnbooks:[]},action)=>{
    switch(action.type){
        case 'GET_All_RETURN_REQUEST':
            return {...state,loading:true}
        case 'GET_All_RETURN_SUCCESS':
            return {
                returnbooks:action.payload,loading:false
            }    
        case 'GET_All_RETURN_FAILED':
            return {error:action.payload,loading:false}
        default:
            return state         
    }
}

export const userIssuedBookReducer = (state={userIssuedBook:[]},action)=>{
    switch(action.type){
        case 'USER_ISSUED_BOOK':
            return {...state,loading:true}
        case 'USER_ISSUED_BOOK_SUCCESS':
            return {
                userIssuedBook:action.payload,loading:false
            }    
        case 'USER_ISSUED_BOOK_FAILED':
            return {error:action.payload,loading:false}
        default:
            return state         
    }
}

export const allIssuedBookReducer = (state={all_IssuedBook:[]},action)=>{
   
    switch(action.type){
        case 'ALL_ISSUED_BOOK':
            return {...state,loading:true}
        case 'ALL_ISSUED_BOOK_SUCCESS':
            return {
                all_IssuedBook:action.payload,loading:false
            }    
        case 'ALL_ISSUED_BOOK_FAILED':
            return {error:action.payload,loading:false}
        default:
            return state         
    }
}

export const singleIssuedBookReducer = (state={},action)=>{
    switch(action.type){
        case 'SINGLE_ISSUE_REQUEST':
            return {...state,loading:true}
        case 'SINGLE_ISSUE_REQUEST_SUCCESS':
            return {
                singleIsBook:action.payload,loading:false
            }    
        case 'SINGLE_ISSUE_REQUEST_FAILED':
            return {error:action.payload,loading:false}
        default:
            return state         
    }
}