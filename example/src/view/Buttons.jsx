import React from 'react';

import { Button, ButtonIcon } from 'uikenobi';


const Buttons = () => {
  return (
    <div className="column">
      <div className="row">
        <Button  fill giant title="Default" />
        <Button  fill large title="Default" />
        <Button  fill medium title="Default" />
        <Button  fill small title="Default" />
        <Button  fill tiny title="Default" />
      </div>

      <div className="row">
        <Button  gost giant title="Gost" />
        <Button  gost large title="Gost" />
        <Button  gost medium title="Gost" />
        <Button  gost small title="Gost" />
        <Button  gost tiny title="Gost" />
      </div>

      <div className="row">
        <ButtonIcon  fill giant title="Gost" icon="logo" />
        <ButtonIcon  fill large title="Gost" icon="logo" />
        <ButtonIcon  fill medium title="Gost" icon="logo" />
        <ButtonIcon  fill small title="Gost" icon="logo" />
        <ButtonIcon  fill tiny title="Gost" icon="logo" />
      </div>

      <div className="row">
        <ButtonIcon  gost giant title="Gost" icon="logo" />
        <ButtonIcon  gost large title="Gost" icon="logo" />
        <ButtonIcon  gost medium title="Gost" icon="logo" />
        <ButtonIcon  gost small title="Gost" icon="logo" />
        <ButtonIcon  gost tiny title="Gost" icon="logo" />
      </div>

      <div className="row">
        <ButtonIcon  fill icon="logo" />
        <ButtonIcon  gost icon="logo" />
      </div>

    </div>
  )
}

export default Buttons;
