import React, { Component } from 'react'

export default class ShowMessageComponnet extends Component {

    componentDidMount = () => {
        console.log('component is mounted')
    }

    componentWillUnmount = () => {
        console.log('componnet is ummounted');
    }

    render() {
        return (
            <div>
                <h3><p style={{ backgroundColor: 'red' }}> I am show message custom Component</p></h3>
            </div>
        )
    }
}
