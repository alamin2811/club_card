import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='max-w-[480px] xsm:max-w-[100%] overflow-y-scroll overflow-x-hidden w-full mx-auto h-[100vh] bg-[#FFFFFF] pb-[93px]'>
      {children}
    </div>
  )
}

export default Layout