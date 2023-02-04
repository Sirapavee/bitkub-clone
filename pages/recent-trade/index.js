import PropTypes from 'prop-types'
import React from 'react'
import CustomHead from '../../components/header'
import Navigation from '../../components/navigation'
import RecentTrade from '../../components/trade/list'
import style from './style.module.css'

const RecentTradePage = ({}) => {
    const COIN_DATA = [
        {
            name: 'Secret Network',
            symbol: 'THB_SCRT',
        },
        {
            name: 'NEAR',
            symbol: 'THB_NEAR',
        },
        {
            name: 'Fantom',
            symbol: 'THB_FTM',
        },
        {
            name: 'Terra',
            symbol: 'THB_LUNA',
        },
        {
            name: 'Decentraland',
            symbol: 'THB_MANA',
        },
    ]

    return (
        <div className={style.container}>
            <CustomHead title={'Recent Trade'} />
            <Navigation pageName={'Recent Trades'} />
            <div className={style['trade-list-page-wrapper']}>
                {
                    COIN_DATA.map((coin) => <RecentTrade coinData={coin} />)
                }
            </div>
        </div>
    )
}

RecentTradePage.PropTypes = {

}

export default RecentTradePage