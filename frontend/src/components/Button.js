import React from 'react'
import PropTypes from 'prop-types';

const Button = ({buttonColor,text,onclickEvent}) => {
  return (
    <button onClick={onclickEvent} className="btn" style={{backgroundColor:buttonColor}}> {text}</button>
  )
}

Button.defaultProps={
    buttonColor:"steelblue"
}

Button.propTypes={
    buttonColor:PropTypes.string,
    text:PropTypes.string,
    onclickEvent:PropTypes.func
}

export default Button

