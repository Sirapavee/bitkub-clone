import PropTypes from 'prop-types'
import React from 'react'
import ArrowIcon from '../../../common/arrow'
import { formatTradeData } from '../../../utils/general/utils'
import styles from './style.module.css'

const TradeDetail = ({ tradeData }) => {
    const currentTime = Math.floor(Date.now() / 1000)
    const { amount, rate, timeStamp, type } = formatTradeData(tradeData)

    return (
        <tr className={styles['trade-wrapper']}>
            <td className={styles['time-notice']}>
                <ArrowIcon direction={type === 'BUY' ? 'up' : 'down'}/>
                <span className={styles[type === 'BUY' ? 'time-green' : 'time-red']}>{`${currentTime - timeStamp} secs`}</span>
            </td>
            <td className={styles['rate-cell']}>{rate}</td>
            <td className={styles['amount-cell']}>{amount}</td>
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