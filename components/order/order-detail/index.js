import PropTypes from 'prop-types'
import React from 'react'
import styles from './style.module.css'

const OrderDetail = ({ selectedData }) => {
    const [_, rat, amt] = selectedData

    return (
        <tr className={styles['order-wrapper']}>
            <td className={styles['rate-cell']}>{rat}</td>
            <td className={styles['amount-cell']}>{amt}</td>
        </tr>
    )
}

OrderDetail.PropTypes = {
    coinData: PropTypes.shape({
        abbrName: PropTypes.string,
        fullName: PropTypes.string,
    }).isRequired,
}

export default OrderDetail