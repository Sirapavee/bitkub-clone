import Link from 'next/link'
import PropTypes from 'prop-types'
import React from "react"
import style from './style.module.css'

const Navigation = ({ pageName }) => {
    const NAV_DATA = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'Recent Trades',
            path: '/recent-trade',
        },
        {
            name: 'RealTime Trades',
            path: '/real-time-trade',
        },
    ]

    return <div className={style['nav-bar-wrapper']}>
        {NAV_DATA.map((nav) => (
            <Link className={style[pageName === nav.name ? 'nav-bar-item-current' : 'nav-bar-item']} href={nav.path} scroll={false}>
                {nav.name}
            </Link>
        ))}
    </div>
}

Navigation.PropTypes = {
    pageName: PropTypes.string.isRequired,
}

export default Navigation