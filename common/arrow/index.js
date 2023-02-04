import PropTypes from 'prop-types'
import React from "react"
import styles from './style.module.css'

const ArrowIcon = ({ direction }) => (
    <img 
        className={styles['arrow-icon']} 
        src={`/static/icons/arrow-${direction}.svg`}
    />
)

ArrowIcon.PropTypes = {
    direction: PropTypes.string.isRequired,
}

export default ArrowIcon