import React from 'react';

import '../../styles-global/button-global.scss';

import { colorTheme, sizedButton } from '../actions'


const Button = (props) => {

  return (
    <button className={`btn ${colorTheme(props)} ${sizedButton(props)}`} disabled={props && props.disabled}>
      { props && props.title }
    </button>
  )
}

export default Button;
