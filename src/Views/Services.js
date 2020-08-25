import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Services extends Component {

    componentDidMount = () => {
        console.log('services cdm is called')
    }

    componentWillUnmount = () => {
        console.log('Services component is unmounted')
    }

    render() {
        return (
            <>
                <div style={{ backgroundColor: 'red' }}>
                    <h1>I am Services Component</h1>
                    <Link to="/home">
                        <button className="btnClass" type="button"> Back To Home </button>
                    </Link>
                    <Link to="/about">
                        <button className="btnClass" type="button"> Back To About </button>
                    </Link>
                </div>
            </>
        )
    }
}
