import React from 'react'
import styles from './style'
import Stats from './componets/Stats'
import Busniess from './componets/Busniess'
import Billing from './componets/Billing'
import Testimonials from './componets/Testimonials'
import CardDeal from './componets/CardDeal'
import Clients from './componets/Clients'
import CTA from './componets/CTA'
import Footer from './componets/Footer'
import Navbar from './componets/Navbar'
import Hero from './componets/Hero' 

function App() {
  return (
    <div className='bg-black w-full overflow-hidden '>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}> 
        <div className= {`${styles.boxWidth}`}>
         <Navbar/>
        </div>
      </div>

      <div className={` bg-black ${styles.flexStart}`}> 
        <div className= {`${styles.boxWidth}`}>
         <Hero />
        </div>
      </div>

      <div className={` bg-black ${styles.flexStart}`}> 
        <div className= {`${styles.boxWidth}`}>
        <Stats />
        <Busniess />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
         
        </div>
      </div>
      
    </div>
  )
}

export default App
