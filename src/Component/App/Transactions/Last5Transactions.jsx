import Link from 'next/link'
import React from 'react'

const transactions = [
  { id: 1, merchant: 'Merchant 1 Store Name', date: '22/09/24', amount: '+0.56', status: 'Pending', color: '#D3A424' },
  { id: 2, merchant: 'Merchant 2 Store Name', date: '22/09/24', amount: '-1.78', status: 'Confirmed', color: '#F00' },
  { id: 3, merchant: 'Merchant 3 Store Name', date: '12/09/24', amount: '+5.19', status: 'Confirmed', color: '#2F981C' },
  { id: 4, merchant: 'Merchant 4 Store Name', date: '23/08/24', amount: '+11.22', status: 'Confirmed', color: '#2F981C' },
  { id: 5, merchant: 'Merchant 5 Store Name', date: '19/08/24', amount: '+14.90', status: 'Confirmed', color: '#2F981C' }
]

const Last5Transactions = () => {
  return (
    <div className="rounded-[6px] bg-white mb-[24px] pt-[5px]" style={{ boxShadow: '0px 6px 3px 0px rgba(0, 0, 0, 0.16)' }}>
      <h5 className="text-[18px] font-[700] leading-[160%] text-[#000] py-[18px] px-[23px]">Last 5 transactions</h5>
      <ul style={{ borderTop: '1px solid #E8E8E8' }}>
        {transactions.map((transaction) => (
          <li key={transaction.id} className="px-[23px] py-[14px] flex items-center justify-between" style={{ borderBottom: '1px solid #E8E8E8' }}>
            <div className="w-[70%]">
              <p className="font-[700] text-[16px]">{transaction.merchant}</p>
              <span className="font-[500] text-[14px]">{transaction.date}</span>
            </div>
            <div className="w-[20%] text-right" style={{ color: transaction.color }}>
              <h6 className="font-[700] text-[16px]">{transaction.amount}</h6>
              <i className="font-[500] text-[14px]">{transaction.status}</i>
            </div>
          </li>
        ))}
      </ul>
      <div className="px-[23px] py-[15px]">
        <Link href="#" className="font-[500] text-[14px]"><span className="text-[#19669D]">Load more transactions</span></Link>
      </div>
    </div>
  )
}

export default Last5Transactions
