import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn={firstName: 'Divyansh', lastName:'Chandak',email:'deecey01@gmail.com'};
  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
          type="greeting" 
          title="Welcome" 
          user={loggedIn?.firstName || 'Guest'}
          subtext="Access and manage your account and transactions effectively"/>

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        RECENT TRANSACTIONS

      </div>
      <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance:123.50},{currentBalance:500}]}
      />
    </section>
  )
}

export default Home
