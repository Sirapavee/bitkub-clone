import PropTypes from 'prop-types'
import { useState, useEffect } from "react"
import useForceUpdate from '../../../hooks/useForceUpdate'
import wsHandler from '../../../utils/web-socket/utils'
import DetailLoader from '../../coin/coin-detail/loader'
import ListTopBar from '../../list-top-bar'
import OrderDetail from '../order-detail'
import styles from './style.module.css'

const OrderList = ({ coinData }) => {
    const [bidOrderList, setBidOrderList] = useState([])
    const [askOrderList, setAskOrderList] = useState([])
    const forceUpdate = useForceUpdate()

    const { id, symbol } = coinData
    const [rateCurrency, amtCurrency] = symbol.split('_')
    
    const getRelatedOrderFunc = (data) => {
        const isBid = data.event.includes('bid')

        return {
            dataList: isBid ? bidOrderList : askOrderList,
            setOrderList: isBid ? setBidOrderList : setAskOrderList,
            sortProcedure: isBid ? 'dec' : 'inc',
        }
    }

    const sortAndSlice = (dataList, procedure) => {
        const isDecreasingOrder = procedure === 'dec'
        const sortedList = dataList.sort((a, b) => isDecreasingOrder ? b[0] - a[0] : a[0] - b[0])
        return sortedList.slice(0, 15)
    }

    const updateOrderList = (data) => {
        if (!['askschanged', 'bidschanged'].includes(data.event)) {
            return null
        }

        const { setOrderList, sortProcedure } = getRelatedOrderFunc(data)
        const sortedList = sortAndSlice(data.data, sortProcedure)
        setOrderList(sortedList)

        // force re-render
        forceUpdate()
    }

    useEffect(() => {
        const ws = wsHandler({
            path: `orderbook/${id}`,
            dependentFunc: {
                updateData: updateOrderList,
            }
        })

        return () => {
            ws.close()
        }
  }, [])

//   console.log('bid list: ', bidOrderList)
//   console.log('ask list: ', askOrderList)

  const askHeader = `Price ASKS (${rateCurrency})`
  const bidHeader = `Price BIDS (${rateCurrency})`
  const amountHeader = `Amount (${amtCurrency})`

  return (
    <div className={styles['order-list-container']}>
        <ListTopBar title={`Live OrderBook (${symbol})`} />
        {!bidOrderList.length ? (
            <DetailLoader />
        ) : (
            <div className={styles['order-table-wrapper']}>
                <table className={styles['order-list-wrapper']}>
                    <th className={styles['list-table-header']}>
                        <td className={styles['rate-head']}>{bidHeader}</td>
                        <td className={styles['amount-head']}>{amountHeader}</td>
                    </th>
                    {!bidOrderList.length ? (
                        <DetailLoader />
                    ) : (
                        <tbody>
                            {bidOrderList.map((orderData) => <OrderDetail selectedData={orderData} />)}
                        </tbody>
                    )}
                </table>
                <table className={styles['order-list-wrapper']}>
                    <th className={styles['list-table-header']}>
                        <td className={styles['rate-head']}>{askHeader}</td>
                        <td className={styles['amount-head']}>{amountHeader}</td>
                    </th>
                    {!askOrderList.length ? (
                        <DetailLoader />
                    ) : (
                        <tbody>
                            {askOrderList.map((orderData) => <OrderDetail selectedData={orderData} />)}
                        </tbody>
                    )}
                </table>
            </div>
        )}
    </div>
  );
}

OrderList.defaultProps = {
    coinData: {
        id: 1,
        symbol: 'THB_BTC',
    },
}

OrderList.PropTypes = {
    coinData: PropTypes.shape({
        id: PropTypes.number,
        symbol: PropTypes.string,
    }),
}

export default OrderList