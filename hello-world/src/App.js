import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class Helloworld extends Component {

  render(){

return(

<a href={this.props.link}>{this.props.linkText}</a>

)

  } 
}

export default Helloworld;