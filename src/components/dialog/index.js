import React from 'react';

import '../styles-global/dialog_style/dialog.scss';

import Button from '../Buttons/button';
import ButtonIcon from '../Buttons/buttonIcon';


const Dialog = () => {
  return (
    <div className="dialog-container">
      <div className="dialog-content">

        <div className="dialog-header">
          <h3>Dialog default</h3>
          {/* <button className="btn-close">
            <img src={'../../icons/close.svg'} alt="Close"/>
          </button> */}
          <ButtonIcon gost />
        </div>


        <div className="dialog-body">
          <div className="icon-notification">
            <img src={'../../icons/alert.svg'} alt="Alert"/>
          </div>
          <div className="dialog-body-description">
            <h1 className="dialog-description-title">Tip of the day</h1>
            <span className="dialog-description-notification">
              Do you know Material X system contains material design components re-styled as it should look and behave for today
            </span>
          </div>
        </div>

        <div className="dialog-footer">
          {/* <button className="dialog-close">
            Secondary
          </button> */}
          <Button gost title="Cancel" />
          <Button fill title="Save"/>
          {/* <button className="dialog-confirmation">
            Primary Action
          </button> */}
        </div>
      </div>
      <div className="backdrop"></div>
    </div>
  )
}

export default Dialog;
