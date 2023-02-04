import React from 'react'
import styles from './style.module.css'

const CoinDetailLoader = ({}) => {
    return (
        <div className={styles['loading-container']}>
            <span className={styles['loading-title']}>Loading...</span>
        </div>
    )
}

export default CoinDetailLoader