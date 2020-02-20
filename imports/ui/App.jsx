import React, { Component } from 'react';
import Search from './Search.jsx';
import DogNamesListContainer from './DogNamesListContainer';
import InsertName from './InsertName.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchTerm: ''
     }
    this.onChange = this.onChange.bind(this)
  }

  onChange(event){
    this.setState({searchTerm: event.target.value})
  }

  render() { 
    return ( 
      <div>
        <h1>Dog name database</h1>
        <Search value={this.state.searchTerm} onChange={this.onChange}></Search>
        <InsertName></InsertName>
        <DogNamesListContainer searchTerm={this.state.searchTerm} />
      </div>
     );
  }
}

export default App
