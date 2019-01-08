import React, { Component } from 'react';
import './Home.css';
import ListItem from '../ListItem';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Receptai:</h1>
          <ul className="list-group text-left">
          <ListItem name="Patiekalas A" type="Pusryčiai" />
          <br></br>
          <ListItem name="Patiekalas B" type="Pietūs" />
          <br></br>
          <ListItem name="Patiekalas C" type="Vakarienė" />
          <br></br>
          <ListItem name="Patiekalas D" type="Uzkandžiai" />
          <br></br>
          <ListItem name="Patiekalas E" type="Pavakariai" />
          <br></br>
          <ListItem name="Patiekalas F" type="Priešpiečiai" />
          <br></br>
          <ListItem name="Patiekalas G" type="Naktipiečiai" />
        </ul>
        </div>
      </div>
    );
  }
}