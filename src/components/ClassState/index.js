import React, { Component } from 'react';

class ClassState extends Component {
    render() {
        return (
            <div>
                <h2>
                    Delete ClassState
                </h2>
                <p>Please, write the security code.</p>
                <input placeholder="Security Code" />
                <button>Check</button>
            </div>
        );
    }
}

export default ClassState;