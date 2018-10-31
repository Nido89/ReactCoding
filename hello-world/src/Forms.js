import React, {Component} from 'react';

class Forms extends Component {

constructor(props){
    super(props);
    this.state = {

        username: ''
    }
    this.formhandler= this.formhandler.bind(this);
}

formhandler(event){
// console.log(event.target.value,'event',event);
this.setState({
    username : event.target.value
})


}
render(){

    return(
    <div>

<h1>My Forms in ReactJS </h1>
<input type= 'text' name= 'username' value= {this.state.username }onChange={this.formhandler}></input>
<p> {this.state.username} </p>



    </div>
    )
}

}


export default Forms;
