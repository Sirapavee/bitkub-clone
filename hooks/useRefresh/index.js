import { useEffect, useState } from 'react'

const useRefresh = ({ fetchFunc }) => {
    const [isRefresh, setIsRefresh] = useState(false)

    const refreshComponent = () => setIsRefresh(true)

    useEffect(() => {
        if (isRefresh) {
            fetchFunc()
            setIsRefresh(false)
        }
    }, [isRefresh])

    return {
        refreshComponent,
    }
}

export default useRefresh