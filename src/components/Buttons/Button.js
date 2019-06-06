import React from 'react';
import './Button.css';
import '.././styles.css';

const Button = (props) => {
  return (
    <div>
    <button type="button" className={props.type} 
    onClick={props.onClick}>{props.text}</button>
  </div>
  )
}
export default Button;