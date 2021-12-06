import React, { useState, useEffect } from "react";

const FAKE_LOADING_TIMER = 3000;

const UseState = ({ name }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const onClickHandle = () => {
    setLoading(true);
  };

  useEffect(() => {
    console.log("Begin the Effect");
    loading &&
      setTimeout(() => {
        console.log("Making the validation");
        setLoading(false);
        console.log("Ending the validation");
      }, FAKE_LOADING_TIMER);
    console.log("Ending the Effect");
  }, [loading]);
  return (
    <div>
      <h2>Delete {name}</h2>
      <p>Please, write the security code.</p>
      {error && <p>The code was wrong</p>}
      {loading && <p>Loading...</p>}
      <input placeholder="Security Code" />
      <button onClick={onClickHandle}>Check</button>
    </div>
  );
};

export default UseState;
