import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { getSupportedCoins } from '../../../api/market'
import useRefresh from '../../../hooks/useRefresh'
import { extractCoinData } from '../../../utils/general/utils'
import CoinDetail from '../coin-detail'
import CoinDetailLoader from '../coin-detail/loader'
import ListTopBar from '../../list-top-bar'
import styles from './style.module.css'

const SupportedCoins = ({ pageRef }) => {
    const [coinList, setCoinList] = useState([])

    const fetchCoin = () => {
        if (coinList.length == 0) {
            getSupportedCoins().then((res) => {
                setCoinList(res)
            })
        }
    }

    const { refreshComponent } = useRefresh({
        fetchFunc: fetchCoin,
    })

    useEffect(() => {
        fetchCoin()
    }, [])

    const pageWidth = pageRef?.current?.getBoundingClientRect()?.width || 0
    const coinData = extractCoinData(coinList?.result)
    console.log(coinList?.result)


    return (
        <div className={styles['coin-list-container']}>
            <ListTopBar onClick={refreshComponent} title='Supported Coins' customStyles={{ flexDirection: pageWidth < 426 ? 'column' : 'row' }} />
            {!coinList?.result?.length ? (
                <CoinDetailLoader />
            ) : (
                <div className={styles['coin-list-wrapper']}>
                    {coinData.map((coin) => <CoinDetail coinData={coin} />)}
                </div>
            )}
        </div>
    )
}

SupportedCoins.PropTypes = {
    pageRef: PropTypes.shape({
        current: PropTypes.func,
    }).isRequired,
}

export default SupportedCoins