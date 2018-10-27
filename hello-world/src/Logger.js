import React, { Component } from 'react';


class Logger extends Component {

    constructor (props){

        super (props);
        console.log ('constructor running');

    }
   
componentWillMount(){

    console.log ('component will mount method');
}





render (){
    console.log ('console for render method');

    return (

        <h1> {this.props.time} </h1>
    )
}


}

export default Logger;