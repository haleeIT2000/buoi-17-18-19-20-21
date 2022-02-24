import React, { Component } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const TextInputGroup = ({
    label,
    name,
    value,
    placeholder,
    type,
    onChange,
    error
}) => {
    return <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
            type={type}
            name={name}
            className={classnames("form-control form-control-lg", { "is-invalid": error})}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
        {error &&  <div className="invalid-feedback"> {error} </div>}
    </div>
}

TextInputGroup.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,

}
TextInputGroup.defaultProps = {
    type: "text"
}
export default TextInputGroup;