import React from 'react'
import { Navigate } from 'react-router-dom'
const ReqAuth = ({children}) => {
    let token= localStorage.getItem("token")
    if(token){
        return children
    }else {
   return <Navigate to="/login"/>
    }
 
}

export default ReqAuth