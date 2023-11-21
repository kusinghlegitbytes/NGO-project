import React, { Fragment } from 'react'
import Logo from '../UI/Logo'
const Background = ({children}) => {
  return <Fragment>
    <div className='app-background'>
        <Logo/>
        {children}
        {/* <div className='bg-circle-blue-1'></div>
        <div className='bg-circle-blue-2'></div>
        <div className='bg-circle-red-1'></div>
        <div className='bg-circle-red-2'></div>
        <div className='bg-circle-red-3'></div>
        <div className='bg-circle-orange-1'></div>
        <div className='bg-circle-orange-2'></div>
        <div className='bg-circle-orange-3'></div>
        <div className='bg-circle-green-1'></div>
        <div className='bg-circle-green-2'></div> */}
    </div>
  </Fragment>
}

export default Background
