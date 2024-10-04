'use client'

import React , {useEffect} from 'react'

function Error({error,reset}:{error:Error,reset:()=>void}) {
  useEffect(()=>{
    console.log(error);
  },[error])
  return (
  <>
  <div className = 'text-center mt-10'>
   <h1>Oops! Something went wrong. Please try again</h1>
   <button className = 'hover:text-amber-600' onClick={()=>reset()}>
    Try Again
   </button>
   </div>

  </>
  )
}

export default Error