import React, { Component } from "react";
import axios from "axios";
import "./Recipe.css";
import LoaderButton from "../modules/App/LoaderButton";
import { FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import Select from 'react-select';
//import Selected from "./Selected.js";

export default class Recipe extends Component {
  constructor(props) {
    super(props);

    

    this.state = {
      isLoading: null,
      title: "",
      category: "",
      time : "",
      instructions: "",
      calories: "",
      carbs: "",
      proteins: "",
      products: []

  
    };
  }
  componentWillMount() {
    const resp = [];
    axios.get(`http://35.177.42.215:8888/v1/api/products/getAll`)
      .then((res) => {
        res.data.map((r) => {
          resp.push({ id: r.id.toString(), title: r.title});
          console.log(r);
        });
        this.setState({ products: resp });
        console.log(this.state);
      });
  }
  validateForm() {
    return this.state.title.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleFileChange = event => {
    this.file = event.target.files[0];
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    axios
    .post(`http://35.177.42.215:8888/v1/api/products/create`,{
      "title": String(this.state.title),
      "category": parseInt(this.state.category,10),
      "time": parseInt(this.state.time),
      "image": String(this.state.image),
      "instructions": String(this.state.instructions),
      "calories": parseInt(this.state.calories,10),
      "carbs": parseInt(this.state.carbs,10),
      "proteins": parseInt(this.state.proteins,10),
      "products": [
        {
          "id": this.state.id,
          "value": this.state.value
        }
      ]
    })
    .then(res=>{
      console.log(res);
      this.setState({ isLoading: false });
    })

    
    
    .catch(error=>{
      console.log(error);
      
    });
    console.log(parseInt(this.state.category,10));
   

   
  }

  render() {
    const {products} = this.state;
    return (
      <div className="Recipe">
        <ControlLabel>Recepto pavadinimas</ControlLabel>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="title">
            <FormControl
              onChange={this.handleChange}
              value={this.state.title}
              componentClass="input"
            />
    <FormGroup controlId="category">
            <ControlLabel>Kategorija </ControlLabel>
            <FormControl 
             onChange={this.handleChange}
            value={this.state.category}
            componentClass="input"
            />

          </FormGroup>
    
    <FormGroup controlId="time">
            <ControlLabel>Ruošimo laikas (min) </ControlLabel>
            <FormControl 
             onChange={this.handleChange}
            value={this.state.time}
            componentClass="input"
            />

          </FormGroup>

      <FormGroup controlId="image">
            <ControlLabel>Nuoroda į nuotrauką</ControlLabel>
            <FormControl 
             onChange={this.handleChange}
            value={this.state.image}
            componentClass="input"
            />
          </FormGroup>
          <FormGroup controlId="instructions">
            <ControlLabel>Instrukcijos </ControlLabel>
            <FormControl 
             onChange={this.handleChange}
            value={this.state.instructions}
            componentClass="textarea"
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
<p><b>Pasirinkti produktai</b></p>
<br></br>
<Select
closeMenuOnSelect={false}
isMulti
options={products.title}
/>
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