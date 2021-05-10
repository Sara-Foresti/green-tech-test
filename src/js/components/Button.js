import React from 'react';

function Button(props) {
  return (
    <button className={`${props.block}__button button`} type={props.type} onClick={props.onClick}>{props.copy}</button>
  )
}

export default Button;
