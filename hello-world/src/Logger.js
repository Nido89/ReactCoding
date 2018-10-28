import React, { Component } from 'react';


class Logger extends Component {

    constructor (props){

        super (props);
        console.log ('constructor running');

    }
   
componentWillMount(){

    console.log ('component will mount method');
}

componentDidMount(){

    console.log('Component Did Mount');
}


componentWillReceiveProps(nextProps){
console.log('NextProps:',nextProps);
}

shouldComponentUpdate(newProps, newState){
    console.log('Should Component Update');
    console.log('NewProps:',newProps);
    console.log('NewState:',newState);
    return true;
}

componentWillUpdate(nextProps, nextState){
    console.log(' Component will Update');
    console.log('NextProps:',nextProps);
    console.log('NextState:',nextState);

}
componentDidUpdate(oldProps, oldState){
    console.log(' Component did Update');
    console.log('oldProps:',oldProps);
    console.log('oldState:',oldState);
}

componentWillUnmount(){

    console.log('Component will unmount triggered');

}

render (){
    console.log ('console for render method');

    return (

        <h1> {this.props.time} </h1>
    )
}


}

export default Logger;