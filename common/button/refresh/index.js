import PropTypes from 'prop-types'
import React from "react"
import styles from './style.module.css'


const RefreshBtn = ({ onClick }) => (
    <img 
        className={styles['reload-icon']} 
        src='/static/icons/refresh.svg'
        onClick={onClick}
    />
)

RefreshBtn.PropTypes = {
    onClick: PropTypes.func.isRequired,
}

export default RefreshBtn