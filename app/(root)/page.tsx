import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'


const Home = () => {
  const loggedIn = { firstName: 'John', lastName: 'Doe' }

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
        
          {/* Header box */}
          <HeaderBox 
              type="greeting"
              title="Welcome"
              user={loggedIn?.firstName || 'Guest'}
              subtext="Access and manage your account and transactions efficiently."
          />

          {/* Total Balance box */}
          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.55}
          />

        </header>
      </div>
    </section>
  )
}

export default Home