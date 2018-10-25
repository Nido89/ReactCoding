import React, { Component } from 'react';


class Clock extends Component {
    constructor (props){
        super(props);
        this.state = {


            currentTime: new Date().toLocaleString()
        }
        this.updateTime();

    }

updateTime(){

    setInterval(  ()=> {
        this.setState({


            currentTime: new Date().toLocaleString()
        })
            

        
    },1000)
}

render() {

    return(

        <h3>   {this.state.currentTime}  </h3>
    )
    }


}
export default Clock;