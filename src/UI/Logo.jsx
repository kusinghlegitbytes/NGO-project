import React, { Fragment } from 'react'
const Logo = () => {
    console.log(process.env.PUBLIC_URL)
  return <Fragment>
    <img src="/assets/imgs/logo.png" className='logo'/>
  </Fragment>
}

export default Logo
