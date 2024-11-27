import { createContext,useContext,useState,useEffect } from 'react'
import axios from 'axios';

const AuthContext=createContext();

const Auth = ({children}) => {
    const [auth,setAuth]=useState({user:null,token:" ",});
        //default axios
       axios.defaults.headers.common['Authorization']=`Bearer ${auth?.token}`;
    //    {
    //     headers:{ "content-type":"application/json",
    //         Authorization:`Bearer ${auth?.token}`,}, 
    // }

    useEffect(()=>{
        const data=localStorage.getItem('auth');
        if(data){
            const parseData=JSON.parse(data);
            setAuth({...auth,
                user:parseData.user,
                token:parseData.token,})
        }
    },[]);

  return (
<AuthContext.Provider value={[auth,setAuth]}>
    {children}
</AuthContext.Provider>
  )
}

const useAuth=()=>useContext(AuthContext);

export {useAuth,Auth};
