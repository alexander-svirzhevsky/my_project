import React from 'react'

export const Input = ({ name, label, type, placeholder }) => {
    return (
        <>
            <div className="row">
                <label htmlFor={name} className="row__label">{label}</label>
                <input type={type} id={name} placeholder={placeholder} className="row__input" />
            </div>
        </>
    )
}