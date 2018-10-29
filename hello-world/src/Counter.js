import React, {Component} from 'react';


class Counter extends Component {

render(){
console.log(this.props);
    return(
        <div>
        <h1> My Counter Application</h1>
        <button>+</button>
        
        <span>{this.props.Counter}</span>
        <button>-</button>
        </div>
    );
}

}



export default Counter;