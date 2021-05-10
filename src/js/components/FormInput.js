import React from 'react';

function FormInput(props) {
  return (
    <div className="form__input">
      <label className={`form__input-label--${props.type}`} htmlFor={props.inputName}>{props.label}</label>
      <input
        className={`form__input--${props.type}`}
        id={props.inputName}
        name={props.inputName}
        onChange={props.onChange}
        type={props.type}
      />
      { props.error && <p className="form__input--error">{ props.errorMessage }</p>}
    </div>
  )
}

export default FormInput;
