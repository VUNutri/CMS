import React, { Component } from "react";
import axios from "axios";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../modules/App/LoaderButton";
import "./Product.css";
import { delay } from "q";

export default class Product extends Component {
  constructor(props) {
    super(props);

  

    this.state = {
      isLoading: null,
      title: "",
      size: "",
      calories: "",
      carbs: "",
      proteins: ""

    };
  }

  validateForm() {
    return this.state.title.length > 0 &&this.state.calories.length > 0 &&this.state.carbs.length > 0 &&this.state.proteins.length > 0 ;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleFileChange = event => {
    this.file = event.target.files[0];
  }

  handleSubmit =  event  => {
    event.preventDefault();
    this.setState({ isLoading: true });
    
    axios
    .post(`http://35.177.42.215:8888/v1/api/products/create`,{
      "title": String(this.state.title),
      "size": String(this.state.size),
      "calories": parseInt(this.state.calories,10),
      "carbs": parseInt(this.state.carbs,10),
      "proteins": parseInt(this.state.proteins,10)
    })
    .then(res=>{
      console.log(res);
      delay(2500);
      this.setState({ isLoading: false });
    })

    
    
    .catch(error=>{
      console.log(error);
      
    });
  



    
  }

  render() {
    return (
      <div className="product">
        <ControlLabel>Produkto pavadinimas</ControlLabel>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="title">
            <FormControl
              onChange={this.handleChange}
              value={this.state.product}
              componentClass="input"
            />
               <FormGroup controlId="size">
            <ControlLabel>Įveskite vienetą (g, mg, ml) </ControlLabel>
            
            <FormControl 
             onChange={this.handleChange}
            value={this.state.size}
            componentClass="input"

            />
          </FormGroup>
          <FormGroup controlId="calories">
            <ControlLabel>Kalorijų skaičius</ControlLabel>
            
            <FormControl 
             onChange={this.handleChange}
            value={this.state.calories}
            componentClass="input"

            />
          </FormGroup>
    
      <FormGroup controlId="carbs">
            <ControlLabel>Angliavandenių skaičius</ControlLabel>
            <FormControl 
             onChange={this.handleChange}
            value={this.state.carbs}
            componentClass="input"
            />
          </FormGroup>
          <FormGroup controlId="proteins">
            <ControlLabel>Baltymų skaičius</ControlLabel>
            <FormControl
             onChange={this.handleChange}
            value={this.state.proteins}
            componentClass="input"
            />
          </FormGroup>
          
    </FormGroup>

    <br></br>
          <LoaderButton
            block
            bsStyle="primary"
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Sukurti"
            loadingText="Kuriama..."
          />
        </form>
      </div>
    );
  }

}