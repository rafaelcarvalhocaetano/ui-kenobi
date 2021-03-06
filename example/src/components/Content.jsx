import React from "react";
import { Switch, Route } from "react-router-dom";

import './content.css';

import Buttons from "../view/Buttons";
import DialogRef from "../view/Dialog";
import Dashboard from '../view/Dashboard';


const Content = () => (
  <main className="Content">
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/buttons">
        <Buttons />
      </Route>
      <Route path="/dialog">
        <DialogRef />
      </Route>
    </Switch>
  </main>
);

export default Content;
