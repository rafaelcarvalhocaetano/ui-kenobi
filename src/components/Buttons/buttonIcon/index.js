import React from 'react';

import pathimage from '../../../icons/logo.svg';
import '../../styles-global/button-global.scss';


import { colorTheme, sizedButton } from '../actions'


const ButtonIcon = (props) => {

  const  showIcon = ({ icon }) => {
    return (
      <img src={pathimage} alt={icon}/>
    )
  }

  const validateIcon = ({ icon, title }) => (icon && !title) ? 'show_icon' : ''

  return (
    <button className={`btn icon ${colorTheme(props)} ${sizedButton(props)} ${validateIcon(props)}`} disabled={props && props.disabled}>
      { props && props.title }
      { showIcon(props) }
    </button>
  )
}

export default ButtonIcon;
