import PropTypes from 'prop-types'
import React from 'react'
import RefreshBtn from '../../common/button/refresh'
import styles from './style.module.css'

const ListTopBar = ({ customStyles, onClick, title }) => {
    return (
        <div className={styles['top-bar']} style={customStyles}>
            <span className={styles['title']}>{title}</span>
            {onClick && <RefreshBtn onClick={onClick} />}
        </div>
    )
}

ListTopBar.defaultProps = {
    customStyles: {},
    onClick: null,
}

ListTopBar.PropTypes = {
    customStyles: PropTypes.shape({}),
    onClick: PropTypes.func,
    title: PropTypes.string.isRequired,
}

export default ListTopBar