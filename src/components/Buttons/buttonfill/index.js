import React from 'react';

import '../../styles-global/button.scss';


const Buttonfill = (props) => {

  const colorTheme = () => {
    let colorButton = 'fill'
    if (props.gost) {
      colorButton = 'gost'
    }
    return colorButton;
  };

  return (
    <button className={`btn ${colorTheme()}`} disabled={props.disabled}>
      FILL
    </button>
  )
}

export default Buttonfill;
