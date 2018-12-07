import React from 'react';
import { BrowserRouter as Router,Link } from 'react-router-dom';

class ListItem extends React.Component {

  render() {
    return (
      <div>
        <li className="list-group-item">Pavadinimas: {this.props.name} // Tipas: {this.props.type}
          <div>
            <button type="button" class="btn btn-primary">EDIT</button>
            <button type="button" class="btn btn-danger">DELETE</button>
          </div>
        </li>
      </div>
    );
  }
}

export default ListItem;