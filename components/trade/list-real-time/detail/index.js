import PropTypes from 'prop-types'
import React from 'react'
import styles from './style.module.css'

const TradeDetail = ({ selectedData }) => {
    const { sym, txn, rat, amt } = selectedData

    return (
        <tr className={styles['rt-trade-wrapper']}>
            <td className={styles['txn-cell']}>{txn}</td>
            <td className={styles['rate-cell']}>{rat}</td>
            <td className={styles['amount-cell']}>{amt}</td>
        </tr>
    )
}

TradeDetail.PropTypes = {
    coinData: PropTypes.shape({
        abbrName: PropTypes.string,
        fullName: PropTypes.string,
    }).isRequired,
}

export default TradeDetail