import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class Helloworld extends Component {

  customStylelink = {
    backgroundColor : 'lightgrey',
    textDecoration: 'underline'
  }

  render(){



return(

<a href={this.props.link} style= {this.customStylelink}>{this.props.linkText}</a>

)

  } 
}

export default Helloworld;