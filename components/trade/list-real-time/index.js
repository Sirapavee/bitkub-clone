import PropTypes from 'prop-types'
import { useState, useEffect } from "react"
import useForceUpdate from '../../../hooks/useForceUpdate'
import wsHandler from '../../../utils/web-socket/utils'
import DetailLoader from '../../coin/coin-detail/loader'
import ListTopBar from '../../list-top-bar'
import TradeDetail from './detail'
import styles from './style.module.css'

const TradeListRealTime = ({ coinData }) => {
    const [tradeDataList, setTradeDataList] = useState([])
    const forceUpdate = useForceUpdate()

    const { name, symbol } = coinData
    const [rateCurrency, amtCurrency] = symbol.toUpperCase().split('_')

    const updateCoinTradeDataList = (data) => {
        tradeDataList.unshift(data)

        if (tradeDataList.length > 10) {
            tradeDataList.pop()
        }

        setTradeDataList(tradeDataList)
        console.log('new list: ', tradeDataList)

        // force re-render
        forceUpdate()
    }

    useEffect(() => {
        const ws = wsHandler({
            path: `market.trade.${symbol}`,
            dependentFunc: {
                updateData: updateCoinTradeDataList,
            }
        })

        return () => {
            ws.close()
        }
  }, [])

  console.log('trad list: ', tradeDataList)

  return (
    <div className={styles['rt-trade-container']}>
        <ListTopBar title={`${name} (${symbol.toUpperCase()})`} />
        {!tradeDataList.length ? (
            <DetailLoader />
        ) : (
            <table className={styles['rt-trade-wrapper']}>
                <th className={styles['list-table-header']}>
                    <td className={styles['id-head']}>{`Transaction id`}</td>
                    <td className={styles['rate-head']}>{`Rate (${rateCurrency})`}</td>
                    <td className={styles['amount-head']}>{`Amount (${amtCurrency})`}</td>
                </th>
                <tbody>
                    {tradeDataList.map((tradeData) => <TradeDetail selectedData={tradeData} />)}
                </tbody>
            </table>
        )}
    </div>
  );
}

TradeListRealTime.defaultProps = {
    coinData: {
        name: 'Bitcoin',
        symbol: 'thb_btc',
    },
}

TradeListRealTime.PropTypes = {
    coinData: PropTypes.shape({
        name: PropTypes.string,
        symbol: PropTypes.string,
    }),
}

export default TradeListRealTime