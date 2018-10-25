import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Helloworld from './Helloworld';
import './App.css';
import Method from './Method';
import Clock from './Digitalclock';
//import * as serviceWorker from './serviceWorker';



//var h1 = <h1 title = 'Hello world Example String'>Hello World !</h1>



ReactDOM.render(
    
    
    <div>  
        <Helloworld link= 'https://www.artmoc.com' linkText= 'An arts shop'/>   
        <Helloworld link= 'http://www.talkme.fi' linkText= ' A customer engagement tool'/>  
        <Helloworld link= 'http://www.adunosolutions.eu' linkText= ' An internet startup'/> 

        <Method></Method>   
        <Clock></Clock> 
        
         </div>
    , document.getElementById('root'));


//serviceWorker.unregister();
