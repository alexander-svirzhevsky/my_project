import React from 'react'
import PropTypes from 'prop-types'

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

Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
}