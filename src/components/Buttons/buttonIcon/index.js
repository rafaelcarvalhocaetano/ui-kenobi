import React from 'react';

import '../../styles-global/button-style/button.scss';


import { colorTheme, sizedButton } from '../actions';

const ButtonIcon = (props) => {

  const  showIcon = ({ icon }) => {
    let path = icon ? icon : 'logo';
    const local = `../../icons/logo.svg`;
    return (<img src={local} alt={path}/>)
  }

  const validateIcon = ({ title }) => !title || title === undefined ? 'notitle' : '';

  return (
    <button className={`btn icon ${colorTheme(props)} ${sizedButton(props)} ${validateIcon(props)}`} disabled={props && props.disabled}>
      { props && props.title }
      { showIcon(props) }
    </button>
  )
}

export default ButtonIcon;
