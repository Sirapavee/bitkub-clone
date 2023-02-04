import PropTypes from 'prop-types'
import React from 'react'
import styles from './style.module.css'

const CoinDetail = ({ coinData }) => {
    const { abbrName, fullName: name, id } = coinData

    return (
        <div className={styles.container}>
            <span className={styles['coin-name-wrapper']}>
                <span className={styles['coin-name']}>{`${id}: ${name}`}</span>
                <span className={styles['coin-abbr-name']}>&#40;{abbrName}&#41;</span>
            </span>
        </div>
    )
}

CoinDetail.PropTypes = {
    coinData: PropTypes.shape({
        abbrName: PropTypes.string,
        fullName: PropTypes.string,
    }).isRequired,
}

export default CoinDetail