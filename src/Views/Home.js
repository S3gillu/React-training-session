import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {

    componentDidMount = () => {
        console.log('home cdm is called')
    }

    componentWillUnmount = () => {
        console.log('Home component is unmounted')
    }

    render() {
        return (
            <>
                <div style={{ backgroundColor: 'lightgreen' }}>               
                    <h1>I am Home Component</h1>
                    <Link to="/about">
                        <button className="btnClass" type="button"> About us </button>
                    </Link>
                    <Link to="/services">
                        <button className="btnClass" type="button"> Services </button>
                    </Link>
                </div>
            </>
        )
    }
}
