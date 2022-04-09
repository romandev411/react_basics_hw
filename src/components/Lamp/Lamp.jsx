import React from 'react';
import './Lamp.css';

export default class Lamp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            light: false,
        }
    }

    toggleLight = () => {
        this.setState({
            light: !this.state.light,
        });
    }

    render() {
        const active = this.state.light ? 'active': '';
        
        return (
            <div className={`lamp ${active}`}>
                <div className="lamp__item"></div>

                <button className="lamp__toggler" onClick={this.toggleLight}>
                    <span className="lamp__dec"></span>
                </button>
            </div>
        )
    }
}