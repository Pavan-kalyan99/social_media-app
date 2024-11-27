import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Toaster } from 'react-hot-toast';

const LayOut = ({children}) => {
  return (
    <>
      <Header/>
      <main style={{minHeight:'100vh'}}>
      <Toaster    toastOptions={{
    className: '',
    style: {
      border: '1px solid #713200',
      padding: '16px',
      color: '#713200',
    },
  }}/>
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default LayOut
