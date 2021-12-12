import React, { useState, useEffect } from "react";
import config from "../../config";

const FAKE_LOADING_TIMER = 3000;

const UseState = ({ name }) => {
  const [state, setState] = useState({
    value: "",
    error: false,
    loading: false
  });

  const onClickHandle = () => {
    setState({
      ...state,
      error: false,
      loading: true
    });
  };

  const onChangeHandle = (event) => {
    setState({
      ...state,
      value: event.target.value
    });
  };

  useEffect(() => {
    state.loading &&
      setTimeout(() => {
        console.log(state);
        if (state.value !== config.SECURITY_CODE) {
          setState({
            ...state,
            error: true,
            loading: false
          });
        } else {
          setState({
            ...state,
            error: false,
            loading: false
          });
        }
      }, FAKE_LOADING_TIMER);
  }, [state.loading]);
  return (
    <div>
      <h2>Delete {name}</h2>
      <p>Please, write the security code.</p>
      {state.error && <p>The code was wrong</p>}
      {state.loading && <p>Loading...</p>}
      <input
        placeholder="Security Code"
        value={state.value}
        onChange={onChangeHandle}
      />
      <button onClick={onClickHandle}>Check</button>
    </div>
  );
};

export default UseState;
