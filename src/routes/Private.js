import React,{useState,useEffect} from 'react'
import {useAuth} from '../context/Auth'
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import Spinner from '../assets/Spinner';

export default function PrivateRoute() {
    const [ok,setOk]=useState(false);
    const [auth,setAuth]=useAuth()
    console.log("auth token :",auth?.token)

    useEffect(()=>{
        
          if(auth?.token){
            console.log("auth is present")
          }
            
          else{

              authCheck()
          }
            const authCheck=async()=>{
                const res=await axios.get('/users/user-auth');
                   
                console.log("Private:",res);

                console.log("auth token :",auth?.token)
                if(res.data.ok){
                    setOk(true)
                }
                else{
                    setOk(false)
                }
            }
        
            
        
    
     
    },[auth?.token])
  return  auth?.token||ok ? <Outlet/>: <Spinner/>
}


