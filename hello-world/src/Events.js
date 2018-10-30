import React, {Component} from 'react';
import Counter from './Counter';


class MyEvents extends Component {

constructor(props){
    super(props);
    this.state = {

        counter: 0
    }
    // this.incrementCounter = this.incrementCounter.bind(this);
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decerementCounter = this.decerementCounter.bind(this);
}
// clickHandler(){

//     console.log('Click Pressed')
//  }
    // incrementCounter(param,ev){
    //     // console.log(ev,'ev');
    //     // console.log(param,'param');
    //  this.setState({
    //      counter: this.state.counter + 100
    //   })
    // }

    incrementCounter(){
//  console.log ('increment');
 if(this.state.counter <10 ){
    this.setState({counter: this.state.counter +1});
    
}
else {

    console.log('You have reached most highest value');
}

    }
    decerementCounter(){
    //    console.log ('decrement');
       if(this.state.counter === 0 ){
           console.log('You have reached most minimum value');
       }
        else {

            this.setState({counter: this.state.counter -1});
        }

    }
     

    render(){

        return(
            <div>
                <Counter counter = {this.state.counter} increment= {this.incrementCounter} decrement = {this.decerementCounter} />

            {/* <h1>My Events</h1>
            {/* <button onClick={function(){
                console.log(' FirstButton')
            }}>FirstButton</button>

<button onClick={this.clickHandler}>Second Button</button> */}
{/* <button onClick= {this.incrementCounter.bind(this)} >Press Me</button> */}
{/* <button onClick= {this.incrementCounter.bind(this,'Hello')} >Press Me</button>
<br></br>
<span>{this.state.counter}</span>
<button onClick= {this.incrementCounter.bind(this,'Events')} >Press Me</button>  */} 

            </div>
        )
    }


}




export default MyEvents;

