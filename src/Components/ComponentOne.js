import React, { Component } from 'react';
import './ComponentOne.css';

import Clock from './Clock';
import CounterComponent from '../CounterComponent';
import ShowMessageComponnet from './ShowMessageComponnet';

class ComponentOne extends Component {

    constructor(props){
        super(props);
        this.state = {
            showMessage: false,
            showAlertMessage: false,
        }
    }

    onClickHandler = () => {
        this.setState({
            showMessage: !this.state.showMessage
        })
    }

    onClickShowAlertHandler = () => {
        this.setState({
            showAlertMessage: !this.state.showAlertMessage
        })
    }

    componentDidUpdate = () => {
        console.log('componnet did update is called')
    }


    render() {
       const { showMessage, showAlertMessage } = this.state;
       const { name, age } = this.props;
       return (
           <div>
           <div className="container">
               <h2> Welcome !! I am {name} and my age is {age} </h2>
               <div>
                   <p>React Training Session</p>
               </div>
           </div>
           <button onClick={() => this.onClickHandler()}>Click Me</button>
           <button onClick={() => this.onClickShowAlertHandler()}>Show Alert</button>
           {/* { showMessage && <p style={{ backgroundColor: 'red' }}> I am show message</p>} */}
           { showMessage && <ShowMessageComponnet />}
           { showAlertMessage && <p style={{ backgroundColor: 'blue' }}> I am show show Alert message</p>}
           <Clock />
           <CounterComponent />
           </div>
       )
   }
}

export default ComponentOne;
