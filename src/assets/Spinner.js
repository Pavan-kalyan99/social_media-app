import React,{useEffect,useState} from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import { useAuth } from '../context/Auth';


const Spinner = ({path='login'}) => {
  const [count,setCount] =useState('');
  const navigate=useNavigate()
  const location =useLocation();
  const [auth,setAuth] =useAuth()
  
  const data=localStorage.getItem('auth');
  console.log('local data :',data)
  useEffect(()=>{
    if(!data){
      navigate('/login');
      // setTimeout(()=>navigate('/dashboard/user'),1000)
    }
    else{
      setTimeout(()=>{

        const interval=setInterval(()=>{
          setCount((preVlaue)=>-preVlaue)
      
          },1000);
          count === 0 && navigate(`/${path}`,{state:location.pathname})
          return ()=>clearInterval(interval)
      },1000)
 
    
    
    }
    
  },[auth,navigate,location,path,data])
  return (
   <>
   <div className=""  style={{height:'100vh'}}>
    <h1 className='text-center'> redirecting to you in {count} seconds</h1>
  <div className="">
    <span className="">Loading...</span>
  </div>
</div>

   </>
  )
}

export default Spinner
