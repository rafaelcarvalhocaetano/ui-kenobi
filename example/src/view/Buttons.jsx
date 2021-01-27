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
        <ButtonIcon  fill giant title="Gost" />
        <ButtonIcon  fill large title="Gost" />
        <ButtonIcon  fill medium title="Gost" />
        <ButtonIcon  fill small title="Gost" />
        <ButtonIcon  fill tiny title="Gost" />
      </div>

      <div className="row">
        <ButtonIcon  gost giant title="Gost" />
        <ButtonIcon  gost large title="Gost" />
        <ButtonIcon  gost medium title="Gost" />
        <ButtonIcon  gost small title="Gost" />
        <ButtonIcon  gost tiny title="Gost" />
        <ButtonIcon  gost />
      </div>

    </div>
  )
}

export default Buttons;
