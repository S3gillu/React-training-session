import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class About extends Component {

    componentDidMount = () => {
        console.log('about cdm is called')
    }

    componentWillUnmount = () => {
        console.log('About component is unmounted')
    }

    render() {
        return (
            <>
                <div style={{ backgroundColor: 'pink' }}>
                    <h1>I am About Component</h1>
                    <Link to="/home">
                        <button className="btnClass" type="button"> Back To Home </button>
                    </Link>
                    <Link to="/services">
                        <button className="btnClass" type="button"> Back To Services </button>
                    </Link>
                </div>
            </>
        )
    }
}
