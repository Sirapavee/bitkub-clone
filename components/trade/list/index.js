import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { getTradeData } from '../../../api/market'
import useRefresh from '../../../hooks/useRefresh'
import DetailLoader from '../../coin/coin-detail/loader'
import ListTopBar from '../../list-top-bar'
import TradeDetail from '../trade-detail'
import styles from './style.module.css'

const RecentTrade = ({ coinData }) => {
    const [tradeList, setTradeList] = useState([])
    const { name, symbol } = coinData
    const [rateCurrency, amtCurrency] = symbol.split('_')

    const fetchTradeData = () => {
        if (tradeList.length == 0) {
            getTradeData({ sym: symbol, lmt: 10 }).then((res) => {
                if (tradeList.length === 0 || tradeList[0][0] !== res.result[0][0]) {
                    setTradeList(res)
                }
            })
        }
    }

    const { refreshComponent } = useRefresh({
        fetchFunc: fetchTradeData,
    })

    useEffect(() => {
        fetchTradeData()
    }, [tradeList.length])

    // console.log(tradeList?.result);

    return (
        <div className={styles['trade-list-container']}>
            <ListTopBar onClick={refreshComponent} title={name} />
            {!tradeList?.result?.length ? (
                <DetailLoader />
            ) : (
                <table className={styles['trade-list-wrapper']}>
                    <th className={styles['list-table-header']}>
                        <td className={styles['time-head']}>TIME</td>
                        <td className={styles['rate-head']}>{`Rate (${rateCurrency})`}</td>
                        <td className={styles['amount-head']}>{`Amount (${amtCurrency})`}</td>
                    </th>
                    <tbody>
                        {tradeList.result.map((tradeData) => <TradeDetail tradeData={tradeData} />)}
                    </tbody>
                </table>
            )}
        </div>
    )
}

RecentTrade.defaultProps = {
    coinData: {
        name: 'Bitcoin',
        symbol: 'THB_BTC',
    },
}

RecentTrade.PropTypes = {
    coinData: PropTypes.shape({
        name: PropTypes.string,
        symbol: PropTypes.string,
    }),
}

export default RecentTrade