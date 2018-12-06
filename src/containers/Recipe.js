import React, { Component } from "react";
import "./Recipe.css";
 import { Form, Text, NestedField } from 'react-form';
 import LoaderButton from "../modules/App/LoaderButton";
 import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

  const QuestionFields = () => (
    <div>
      
      <span>
      <label htmlFor="color">1?</label>
      <br></br>
      <Text field="color" id="color" />
      <br></br>
      </span>
      <span>
      <label htmlFor="food">2?</label>
      <br></br>
      <Text field="food" id="food" />
      </span>
      <br></br>
      <span>
      <label htmlFor="car">3?</label>
      <br></br>
      <Text field="car" id="car" />
      </span>
    </div>
  )

  class Recipe extends Component {
    constructor(props) {
      super(props);
  
      this.file = null;
  
      this.state = {
        isLoading: null,
        content: ""
      };
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
    }
  
  
    render() {
      return (
        <Form onSubmit={submittedValues => this.setState({ submittedValues })}>
          { formApi => (
            <form onSubmit={formApi.submitForm} id="form4">
              <label htmlFor="Recipename">Recipe name</label>
              <br></br>
              <Text field="Recipename" id="Recipename3" />
              <NestedField field="questions">
                <QuestionFields />
              </NestedField>
              <br></br>
              <FormGroup controlId="formControlsSelectMultiple">
      <ControlLabel>Productu pasirinkimas</ControlLabel>
      <FormControl componentClass="select" multiple>
        <option value="select">PRODUCT1</option>
        <option value="other">PRODUCTN</option>
      </FormControl>
    </FormGroup>
    <br></br>
              <LoaderButton
            block
            bsStyle="primary"
            bsSize="large"
            type="submit"
            isLoading={this.state.isLoading}
            text="Sukurti"
            loadingText="Kuriama..."
          />
            </form>
          )}
        </Form>
      );
    }
  }
  export default Recipe;