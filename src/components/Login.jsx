import React from 'react'
import Logo from '../assets/logo.svg'
import { Input } from './Input'

export const Login = () => {
    return (
        <div className="logo-content">
            <div className="logo-area">
                <img src={Logo} alt="logo" />
            </div>
            <div className="active-area">
                <form className="form">
                    <h1 className="form__title">Войти</h1>
                    <Input name="row__label-email" label="Email" type="email" placeholder="mail@mail.ru" />
                    <Input name="row__label-password" label="Пароль" type="password" placeholder="*************" />
                    <span className="password-check">Забыли пароль?</span>
                    <button type="submit" className="btn">Войти</button>
                    <div className="form__extra">
                        <span className="form__extra-text">Новый пользователь?</span>
                        <span className="registration">Регистрация</span>
                    </div>
                </form>
            </div>
        </div>
    )
}