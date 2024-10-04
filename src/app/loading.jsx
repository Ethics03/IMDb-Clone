
import React from 'react'
import load from './load.svg'
import Image from 'next/image';

function loading() {
  return (
    <div className = 'flex justify-center mt-16'>
        <Image src= {load} width="50" height="50" className = 'mt-20' />
    </div>
  )
}

export default loading