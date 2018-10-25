import React, { Component } from 'react';



class Method extends Component {
    myLinkedinLink(){


    return(

        'https://www.linkedin.com/in/jalalnaveed/'
    )

}

LinkedinUser (){
    return 'Jalal Naveed'
}
render(){

return(


    <div>

        <p>
            My Linkedin Id is : <a href= {this.myLinkedinLink()}>{this.LinkedinUser()}</a>
        </p>
    </div>
)
}
}

export default Method;
