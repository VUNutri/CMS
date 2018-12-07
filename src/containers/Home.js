import React, { Component } from 'react';
import './Home.css';
import ListItem from '../ListItem';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>PATIEKALAI:</h1>
          <ul className="list-group text-left">
          <ListItem name="Patiekalas A" type="Pusryciai" />
          <ListItem name="Patiekalas B" type="Pietus" />
          <ListItem name="Patiekalas C" type="Vakariene" />
          <ListItem name="Patiekalas D" type="Uzkandziai" />
          <ListItem name="Patiekalas E" type="Dar kazkas" />
          <ListItem name="Patiekalas F" type="Dar eilinis propsas" />
          <ListItem name="Patiekalas G" type="Propsi props" />
        </ul>
        </div>
      </div>
    );
  }
}