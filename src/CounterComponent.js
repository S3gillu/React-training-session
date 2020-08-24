import React, { Component } from 'react'

class CounterComponnet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            newValue: 0,
            homeObj:  [{ name: "home1", address: "City1"}, {name: "home2", address: "city2"}]
        }
    }

    buttonClickHandler = (type) => {
        if(type === "plus") {
            let tempHomeObj =  this.state.homeObj
            tempHomeObj[0].name = "amit home"
            this.setState({
                value: this.state.value + 1,
                newValue: this.state.newValue + 3,
                homeObj: tempHomeObj
            })
        } else if (type === "minus") {
            this.setState({
                value: this.state.value - 1,
            })
        } 
    }

    render() {
        const { value, newValue, homeObj } = this.state;
        return (
            <div>
                <h2>Counter Value :  {value}</h2>
                <h2>Counter Value Coyy added by 3 :  {newValue}</h2>
                {
                    homeObj.map((obj, index) => {
                       return  <h4 key={index}>Home Detais: {obj.name} {obj.address}</h4>
                    })
                }
                <button onClick={() => this.buttonClickHandler("plus")}> Plus +</button>
                <button onClick={() => this.buttonClickHandler("minus")}> Minus -</button>
            </div>
        )
    }
}

export default CounterComponnet
