


// var h1 = React.createElement('h1', null, 'First Components');
// var p = React.createElement('p', null, 'The Ministry of Economic Affairs and Employment');

// class CustomComponent extends React.Component {

//     render() {
//         return (
//             React.createElement('div', null, h1, p)
//         );


//     }


// }


// var firstComponent = React.createElement(CustomComponent, null);


// var content = document.getElementById('content');


// ReactDOM.render(firstComponent, content);

















class CustomLink extends React.Component {

    render() {

console.log(this.props,'this.props');
    
return (
         React.createElement('a',this.props,this.props.linktext)

)


};

}

var myLinks = React.createElement('div', null,

React.createElement(CustomLink,{href:'wwww.talkme.fi', linktext:'Mobile App',title:'Finland App'}),
React.createElement(CustomLink,{href:'www.adunosolutions.eu',linktext:'Company',title:'Finland App'}),
React.createElement(CustomLink,{href:'www.artmoc.com',linktext:'Arts',title:'DesignEngine'}),
React.createElement(CustomLink,{href:'www.facebook.com',linktext:'Social',title:'SocialEngine'}),
React.createElement(CustomLink,{href:'www.google.com',linktext:'Search',title:'SearchEngine'})

)



var content = document.getElementById('content');


 ReactDOM.render(myLinks, content);