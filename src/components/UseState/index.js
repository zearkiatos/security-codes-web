import React, { useState } from 'react';

const UseState = ({ name }) => {
    const [error, setError] = useState(false);
    const onClickHandle = () => {
        setError(!error);
    };
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
                onClick={onClickHandle}
            >
                Check
            </button>
        </div>
    );
};

export default UseState;