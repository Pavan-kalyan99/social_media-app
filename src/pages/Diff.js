import React from 'react'
import Trianglify from 'react-trianglify'

import ReactBubblyEffectButton from "react-bubbly-effect-button";
const Diff = () => {
  const onClick = () => {
    console.log('Clicked')
  }
  return (
    <>
    <div>
    <ReactBubblyEffectButton text="Click here" color='#fff' bgColor='#ff0081' onClick={onClick}/>

    {/* <Trianglify /> */}
    </div>
    </>
  //   <div className="diff overflow-hidden">
  //   <div className="diff-item-1">
  //     <div className="bg-primary text-primary-content text-6xl font-black grid place-content-center">Share Wave</div>
  //   </div>
  //   <div className="diff-item-2">
  //     <div className="bg-base-200 text-5xl font-black grid place-content-center">Share Wave</div>
  //   </div>
  //   <div className="diff-resizer"></div>
  // </div>
  )
}

export default Diff
