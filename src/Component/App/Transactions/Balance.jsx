import React from 'react'

const Balance = () => {
  return (
    <div className="rounded-[6px] bg-white p-[26px] mb-[24px]" style={{ boxShadow: '0px 6px 3px 0px rgba(0, 0, 0, 0.16)' }}>
        <p className="text-[21px] font-[500] leafing-[160%] text-[#000] text-center mb-[7px]">Available: <span className="text-[#2F981C]">5.32</span> <span className="font-[700]">Club€uros</span></p>
        <p className="text-[21px] font-[500] leafing-[160%] text-[#000] text-center">Total: <span>9.26</span> <span className="font-[700]">Club€uros</span></p>
    </div>
  )
}

export default Balance