import React, { useRef } from 'react'
import SupportedCoins from '../components/coin/supported-list'
import CustomHead from '../components/header'
import Navigation from '../components/navigation'
import OrderList from '../components/order/order-list'
import styles from '../styles/Home.module.css'

 const Home = () => {
  const pageRef = useRef()

  return (
    <div className={styles.container} ref={pageRef}>
      <CustomHead />
      <Navigation pageName={'Home'} />
      <div className={styles['content-wrapper']}>
        <OrderList />
        <SupportedCoins pageRef={pageRef} />
      </div>
    </div>
  )
}

export default Home