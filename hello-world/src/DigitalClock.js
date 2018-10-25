import React, { Component } from 'react';


class Clock extends Component {
    constructor (props){
        super(props);
        this.state = {


            currentTime: new Date().toLocaleTimeString()
        }


        



    }

render() {

    return(

        <h3>   {this.state.currentTime}  </h3>
    )
    }


}
export default Clock;