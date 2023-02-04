import { callApi } from ".."

const getSupportedCoins = () => {
    const supportedCoins = callApi('/api/market/symbols')
    return supportedCoins
}

const getCoinTickerData = (query) => {
    const tradeData = callApi('/api/market/ticker', query)
    return tradeData
}

const getTradeData = (query) => {
    const tradeData = callApi('/api/market/trades', query)
    return tradeData
}

export {
    getCoinTickerData,
    getSupportedCoins,
    getTradeData,
}