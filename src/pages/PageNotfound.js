import React from 'react'
import { Link } from 'react-router-dom'
import LayOut from './../Layout/LayOut';
const PageNotfound = ({children}) => {
  return (
    <>
    <LayOut>   
       <div className='pageNotFound'>
        <div className='pnf'>
          <h1 className='pnf-title'>404</h1>
          <h2 className='pnf-heading'>Oops.. page not found</h2>
          <Link to='/' className='pnf-btn'>
            Go back
          </Link>
        </div>
    </div>
    </LayOut>

    </>
  )
}

export default PageNotfound
