import { getCoinTickerData } from "../../api/market"

const extractCoinData = (coinData) => {
    if (!coinData) {
        return {}
    }

    const extractedData = coinData.map((coin) => {
        const fullName = coin.info.split(' ').slice(3,).join(' ')
        const abbrName = coin.symbol.split('_')[1]
        // let tickerData = {}

        // getCoinTickerData({ sym: coin.symbol }).then((res) => {
        //     tickerData = res.result
        // })

        return {
            abbrName,
            fullName,
            id: coin.id,
        }
    })

    return extractedData
}

const formatTradeData = (tradeData) => {
    if (!tradeData) {
        return {}
    }

    const [timeStamp, rate, amount, type] = tradeData

    return {
        timeStamp,
        rate,
        amount,
        type,
    }
}

const saveToLocalStorage = (name, data) => window.localStorage.setItem(name, JSON.stringify(data))

const getLocalStorageData = (name, defaultData = []) => {
    if (typeof window === 'undefined') {
        return defaultData
    }

    const storedData = window.localStorage.getItem(`${name}_RT_TRADE_DATA`) || defaultData
    return typeof storedData === 'string' ? JSON.parse(storedData) : storedData
}

export {
    extractCoinData,
    formatTradeData,
    getLocalStorageData,
    saveToLocalStorage,
}