import PropTypes from 'prop-types'
import React from 'react'
import CustomHead from '../../components/header'
import Navigation from '../../components/navigation'
import TradeListRealTime from '../../components/trade/list-real-time'
import style from './style.module.css'

const RealTimeTradePage = ({}) => {
    const COIN_DATA = [
        {
            name: 'Bitcoin',
            symbol: 'thb_btc',
        },
        {
            name: 'NEAR',
            symbol: 'thb_near',
        },
        {
            name: 'TRON',
            symbol: 'thb_trx',
        },
        {
            name: 'Dogecoin',
            symbol: 'thb_doge',
        },
    ]

    return (
        <div className={style.container}>
            <CustomHead title={'Real-Time Trade'} />
            <Navigation pageName={'RealTime Trades'} />
            <div className={style['rt-trade-page-wrapper']}>
                {
                    COIN_DATA.map((coin) => <TradeListRealTime coinData={coin} />)
                }
            </div>
        </div>
    )
}

RealTimeTradePage.PropTypes = {

}

export default RealTimeTradePage