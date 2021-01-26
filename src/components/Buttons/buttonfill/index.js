import React from 'react';

import '../../styles-global/button.scss';


const Buttonfill = (props) => {

  const listWidth = ['giant', 'large', 'medium', 'small', 'tiny']

  const colorTheme = () => {
    let colorButton = 'fill'
    if (props.gost) {
      colorButton = 'gost'
    }
    return colorButton;
  };


  const widthButton = () => {
    return listWidth.filter((x, i) => props[x] ? listWidth[i] : null)[0];
  }

  return (
    <button className={`btn ${colorTheme()} ${widthButton()}`} disabled={props.disabled}>
      FILL
    </button>
  )
}

export default Buttonfill;
