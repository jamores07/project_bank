import AnimatedCounter from '@/components/AnimatedCounter'
import React from 'react'
import DoughnutChart from './DoughnutChart'

const TotalBalanceBox = ({
    accounts = [], totalBanks, totalCurrentBalance
  }: TotalBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        
        {/* Doughnut chart */}
        <div className='total-balance-chart'>
            <DoughnutChart 
                accounts={accounts}
            />
        </div>

        {/* Bank accounts */}
        <div className='flex flex-col gap-6'>
            <h2 className='header-2'>
             Bank accounts : {totalBanks}
            </h2>
            <div className='flex flex-col gap-2'>
                <p className='totlal-balance-label'>
                    Total Current Balance
                </p>
                <div className='total-balance-amount flex-center gap-2'>
                    {/* Animated counter */}
                    <AnimatedCounter amount={totalCurrentBalance} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox