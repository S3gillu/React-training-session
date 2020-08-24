import React, { Component } from 'react'

export default class CustomComponnet extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
        <p>I am nested child {this.props.index} and custom component/</p>
        )
    }
}
