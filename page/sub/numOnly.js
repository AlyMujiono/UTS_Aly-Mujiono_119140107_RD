import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default class NumOnly extends Component {
    constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

   handleInputChange = (text) => {
    if (/^\d+$/.test(text)) {
      this.setState({
        text: text
      });
    }
  }

  
  render () {
    return (
      <TextInput
        keyboardType='numeric'
        onChangeText={this.handleInputChange}
        value={this.state.text}
        style={{width:50,borderWidth:1}}
      />
    )
  }

}