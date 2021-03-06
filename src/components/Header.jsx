import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../assets/header-logo.svg'

export const Header = ({ navigate }) => {
    return (
        <header className="header">
            <img src={Logo} alt="logo" />
            <nav className="navigation">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <button className="navigation__btn" onClick={() => { navigate("map") }} >Карта</button>
                    </li>
                    <li className="navigation__item">
                        <button className="navigation__btn" onClick={() => { navigate("profile") }}>Профиль</button>
                    </li>
                    <li className="navigation__item">
                        <button className="navigation__btn" onClick={() => { navigate("home") }}>Выйти</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

Header.propTypes = {
    navigate: PropTypes.func.isRequired
}