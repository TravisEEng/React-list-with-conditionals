import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    inputText: '',
  }

  textChangedHandler = (event) =>{

    this.setState({
      inputText:event.target.value
    });

  } 

  deleteTextHandler = (letterIndex) =>{
    const letters = [...this.state.inputText];
    letters.splice(letterIndex,1);
    this.setState({inputText: letters.join('')})
  }

 

  render() {
    const charList = this.state.inputText.split('').map((letter, index) =>{
        return <Char 
            click={() => this.deleteTextHandler(index)}
            letterFromText={letter}
              key={index}
            />;
          });
         


    return (
      <div className="App">
        
        <input type="text"
         onChange={this.textChangedHandler} 
         value={this.state.inputText} />
        <p>{this.state.inputText.length}</p>
        <Validation textLength={this.state.inputText.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
