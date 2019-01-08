import React, { Component } from "react";
import FilteredMultiSelect from 'react-filtered-multiselect'
import axios from "axios";
  
  class Ms extends Component {
    constructor(props) {
        super(props);
    
        
    
        this.state = {
          products: [
            {
              id: "",
              title: "",
              value: "",
              calories: "",
              carbs: "",
              proteins: ""
    
            }
          ]
    
    
        };
      }
  
    handleDeselect(index) {
      let products = this.state.products.slice()
      products.splice(index, 1)
      this.setState({products})
    }
  
    handleSelectionChange = (products) => {
      this.setState({products})
    }
    componentWillMount() {
        const resp = [];
        axios.get(`http://35.177.42.215:8888/v1/api/products/getAll`)
          .then((res) => {
            res.data.map((r) => {
              resp.push({ id: r.id.toString(), title: r.title });
            });
            this.setState({ products: resp });
          });
      }
    render() {
      return <div>
        <FilteredMultiSelect
          onChange={this.handleSelectionChange}
          options={this.products}
          selectedOptions={this.products}
          textProp="title"
          valueProp=""
        />
        {this.products.title.length === 0 && <p>(nothing selected yet)</p>}
        {this.products.title.length > 0 && <ul>
          {this.products.map((ship, i) => <li key={ship.id}>
            {`${this.products.title} `}
            <button type="button" onClick={() => this.handleDeselect(i)}>
              &times;
            </button>
          </li>)}
        </ul>}
      </div>
    }
  }
  export default Ms;