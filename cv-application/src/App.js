import './App.css';
import Navbar from './components/Navbar'
import PersonalInfo from './components/PersonalInfo'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience';
import YourCV from './components/YourCV';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {name: '',
      address: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({[event.target.name] : event.target.value})
  }
  
  handleSubmit(event){
    console.log(this.state.name)
    event.preventDefault();
  }

  render(){
    return (
      <div className="App">
        <Navbar/>
        <div className="container">
          <PersonalInfo handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
          <Education/>
          <WorkExperience/>
          <YourCV name={this.state.name} address={this.state.address}/>
        </div>
      </div>
    );
  }
}

export default App;
