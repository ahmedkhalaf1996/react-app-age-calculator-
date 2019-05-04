import React , { Component } from 'react';
import { Form , FormControl, Button } from 'react-bootstrap';
import './App.css';
import AgeStats from './AgeStats';

class App extends Component {
    constructor() {
     super();
     
     this.state = {
         newData: '',
         birthday: '1992-6-21',
         showStats: false
     }
    } 
    
    changeBirthday(){
        console.log(this.state);
        this.setState({ 
            birthday: this.state.newData,
            showStats: true
         });
    }

    render(){
     return (
        <div className="App">
         <Form inline>
          <h2>Put Your Birthday!</h2>
          <FormControl 
           type="date"
           onChange={ event => this.setState({ newData: event.target.value }) }
           >
          </FormControl>    
          {' '}
          <Button onClick={ () => this.changeBirthday() }>
           Submit
          </Button>
      
      { 
       this.state.showStats ? 
         <div className="fade age-stats">
          <AgeStats data={ this.state.birthday } /> 
         </div>
        :
         <div></div>
      }
         
         </Form>
        </div>
     )
    }
}


export default App;

