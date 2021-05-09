import React from 'react';

function Button(props) {
  return (
    <button className={`${props.block}__button button`} type={props.type}>{props.copy}</button>
  )
}

export default Button;
