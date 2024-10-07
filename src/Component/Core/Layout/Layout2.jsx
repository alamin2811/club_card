import React from 'react'
import BottomNavigation from '../Footer/Index'

const Layout2 = ({children}) => {
  return (
    <div className='max-w-[480px] xsm:max-w-[100%] w-full mx-auto h-[100vh] bg-[#FFFFFF] relative overflow-y-scroll overflow-x-hidden pb-[93px]'>
      <div className="relative z-0">
        {children}
      </div>
      <BottomNavigation/>
    </div>
  )
}

export default Layout2