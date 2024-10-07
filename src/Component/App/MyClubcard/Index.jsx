import React from 'react'
import ClubCardBalance from './ClubCardBalance'

const MyClubcard = () => {
    return (
        <div className="relative bg-[#F2F1F7] min-h-[89vh] overflow-y-scroll overflow-x-hidden">
            <div className="absolute top-0 left-0 w-full bg-[#19669D] h-[200px] z-0" />
            <div className="relative z-10 pt-[87px] px-[18px] pb-[25px]">
                <div className="bg-white px-[20%] rounded-[6px]"  style={{ boxShadow: '0px 6px 3px 0px rgba(0, 0, 0, 0.16)'}}>
                    <div className="bg-[#19669D] rounded-full h-[96px] w-[96px] mx-auto flex items-center justify-center px-[20px] translate-y-[-53px]" style={{ border: '3px solid #FFFFFF' }}>
                        <img src="./assets/images/img/record-circle.png" alt="img" />
                    </div>
                    <div className="mx-auto mt-[4px] overflow-hidded relative w-full translate-y-[-47px] mb-[11px]">
                        <img src="./assets/images/img/qr-code.png" alt="img" />
                    </div>
                    <p className="text-[16px] font-[600] leafing-[160%] text-[#000] text-center translate-y-[-45px]">54545 4844 3903 2292</p>
                </div>
                <ClubCardBalance/>
            </div>
        </div>
    )
}

export default MyClubcard