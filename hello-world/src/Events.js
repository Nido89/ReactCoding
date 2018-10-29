import React, {Component} from 'react';


class MyEvents extends Component {

constructor(props){
    super(props);
    this.state = {

        counter:5
    }
    // this.incrementCounter = this.incrementCounter.bind(this);
}
clickHandler(){

    console.log('Click Pressed')
 }
    incrementCounter(param,ev){
        console.log(ev,'ev');
        console.log(param,'param');
    //  this.setState({
    //     counter: this.state.counter + 100
    //  })
    }
     

    render(){

        return(
            <div>
            <h1>My Events</h1>
            {/* <button onClick={function(){
                console.log(' FirstButton')
            }}>FirstButton</button>

<button onClick={this.clickHandler}>Second Button</button> */}
{/* <button onClick= {this.incrementCounter.bind(this)} >Press Me</button> */}
<button onClick= {this.incrementCounter.bind(this,'Hello')} >Press Me</button>
<br></br>
<span>{this.state.counter}</span>
<button onClick= {this.incrementCounter.bind(this,'Events')} >Press Me</button> 

            </div>
        )
    }


}




export default MyEvents;

