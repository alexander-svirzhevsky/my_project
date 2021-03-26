import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../assets/logo.svg'
import { Input } from './Input'

export const Registration = ({ navigate }) => {
    return (
        <div className="logo-content">
            <div className="logo-area">
                <img src={Logo} alt="logo" />
            </div>
            <div className="active-area">
                <form className="form">
                    <h1 className="form__title">Регистрация</h1>
                    <Input name="row__label-email" label="Email*" type="email" placeholder="mail@mail.ru" />
                    <Input name="row__label-name " label="Как вас зовут?**" type="tex" placeholder="Петр Александрович" />
                    <Input name="row__label-password" label="Придумайте пароль*" type="password" placeholder="*************" />
                    <span className="password-check">Забыли пароль?</span>
                    <button type="submit" className="btn">Зарегистрироваться</button>
                    <div className="form__extra">
                        <span className="form__extra-text">Уже зарегестрированны?</span>
                        <span className="registration" onClick={() => { navigate("home") }}>Войти</span>
                    </div>
                </form>
            </div>
        </div>
    )
}

Registration.propTypes = {
    navigate: PropTypes.func.isRequired
}