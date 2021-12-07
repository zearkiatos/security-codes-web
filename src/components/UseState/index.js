import React, { useState, useEffect } from "react";
import config from "../../config";

const FAKE_LOADING_TIMER = 3000;

const UseState = ({ name }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onClickHandle = () => {
    setLoading(true);
  };

  const onChangeHandle = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    setError(false);
  }, [value]);

  useEffect(() => {
    loading &&
      setTimeout(() => {
        value !== config.SECURITY_CODE && setError(true);
        setLoading(false);
      }, FAKE_LOADING_TIMER);
  }, [loading]);
  return (
    <div>
      <h2>Delete {name}</h2>
      <p>Please, write the security code.</p>
      {error && <p>The code was wrong</p>}
      {loading && <p>Loading...</p>}
      <input
        placeholder="Security Code"
        value={value}
        onChange={onChangeHandle}
      />
      <button onClick={onClickHandle}>Check</button>
    </div>
  );
};

export default UseState;
