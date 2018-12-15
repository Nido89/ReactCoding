import React, {Component} from 'react';

class Forms extends Component {

constructor(props){
    super(props);
    this.state = {

        username: '',
        allUsers: [],
        radioGroup: {
            MEANStack : false,
            MERNStack : true,
            LAMPStack: false
        },
        checkboxGroup:{
            MongoDB:false,
            Express:false,
            React:true,
            Node:false
        },
        selectedValue: 'Flutter'

    }
    this.formhandler= this.formhandler.bind(this);
    this.clickHandler= this.clickHandler.bind(this);
    this.radioHandler= this.radioHandler.bind(this);
    this.checkboxHandler= this.checkboxHandler.bind(this);
    
}

formhandler(event){
// console.log(event.target.value,'event',event);
this.setState({
    username : event.target.value
})
}
clickHandler(event){
let currentUser = this.state.allUsers;
currentUser.push(this.state.username);
this.setState({
    allUsers : currentUser,
    username:''
    
})
console.log(this.state.allUsers);
}
radioHandler(event){
    console.log(event.target.value)
    let radioGroup = this.state.radioGroup;
    for (var key in radioGroup){
        radioGroup[key]= false
    } 
    radioGroup[event.target.value] = event.target.checked;


    this.setState({
radioGroup: radioGroup
    })

}
checkboxHandler(event){
let checkbox = this.state.checkboxGroup;
checkbox[event.target.value] = event.target.checked;
this.setState({
    checkboxGroup : checkbox
})


}
render(){

    return(
    <div>

<h1>My Forms in ReactJS </h1>
<input type= 'text' name= 'username' value= {this.state.username }onChange={this.formhandler}></input>

<br/>

Developers Category:
<br/>
<label>
MEAN Stack <input type= 'radio' name='devcategory' value='MEANStack' checked={this.state.radioGroup.MEANStack}onChange={this.radioHandler} />
</label>
<br/>
<label>
MERN Stack <input type= 'radio' name='devcategory' value='MERNStack' checked={this.state.radioGroup.MERNStack}onChange={this.radioHandler}/>
</label>
<br/>
<label>
LAMP Stack <input type= 'radio' name='devcategory' value='LAMPStack' checked={this.state.radioGroup.LAMPStack}onChange={this.radioHandler}/>
</label>
<br/>




Technologies:
<br/>
<label>
MongoDB <input type= 'checkbox' name='tech' value='MongoDB' checked={this.state.checkboxGroup.MongoDB}onChange={this.checkboxHandler} />
</label>
<br/>
<label>
Express<input type= 'checkbox' name='tech' value='Express' checked={this.state.checkboxGroup.Express}onChange={this.checkboxHandler}/>
</label>
<br/>
<label>
React <input type= 'checkbox' name='tech' value='React' checked={this.state.checkboxGroup.React}onChange={this.checkboxHandler}/>
</label>
<br/>
<label>
Node <input type= 'checkbox' name='tech' value='Node' checked={this.state.checkboxGroup.Node}onChange={this.checkboxHandler}/>
</label>
<br/>

<select value= 'Flutter'>
    <option value='Ruby'> Ruby </option>
    <option value='Python'> Python</option>
    <option value='Flutter'>Flutter </option>
</select>





<button onClick={this.clickHandler}> Save Me </button>
{/* <p> {this.state.username} </p> */}



    </div>
    )
}

}


export default Forms;
