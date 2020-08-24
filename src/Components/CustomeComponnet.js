import React, { Component } from 'react'

export default class CustomComponnet extends Component {
    render() {
        return (
        <p>I am nested child {this.props.index}</p>
        )
    }
}
