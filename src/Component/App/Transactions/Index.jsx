import React from 'react'
import BackBtn from '../../Core/BackBtn/Index'
import Balance from './Balance'
import Last5Transactions from './Last5Transactions'

const Transactions = () => {
  return (
    <div className="relative bg-[#F2F1F7] min-h-[89vh] overflow-y-scroll overflow-x-hidden">
        <BackBtn pageTitle='Transactions' />
        <div className="p-[18px]">
            <Balance/>
            <Last5Transactions/>
        </div>
    </div>
  )
}

export default Transactions