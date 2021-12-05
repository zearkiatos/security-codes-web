import React, { Component } from 'react';

class ClassState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        };
    }
    onClickHandler = (error) => {
        this.setState({
            error: !error
        });
    };
    render() {
        const { name } = this.props;
        const { error } = this.state;
        return (
            <div>
                <h2>
                    Delete {name}
                </h2>
                <p>Please, write the security code.</p>
                {error && (
                    <p>The code was wrong</p>
                )}
                <input placeholder="Security Code" />
                <button
                onClick={() => this.onClickHandler(error)}
                >
                    Check
                </button>
            </div>
        );
    }
}

export default ClassState;