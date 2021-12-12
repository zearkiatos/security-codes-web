import React, { Fragment, useState, useEffect } from "react";
import config from "../../config";

const FAKE_LOADING_TIMER = 3000;

const UseState = ({ name }) => {
  const [state, setState] = useState({
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false
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
            loading: false,
            confirmed: true
          });
        }
      }, FAKE_LOADING_TIMER);
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
    return (
      <Fragment>
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
      </Fragment>
    );
  } else if (state.confirmed) {
    const onConfirmHandler = () => {
      setState({
        ...state,
        confirmed: false,
        deleted: true
      });
    };

    const onUnconfirmHandler = () => {
      setState({
        ...state,
        confirmed: false,
        deleted: false,
        value: ""
      });
    };
    return (
      <Fragment>
        <p>Are you sure for this action? Please confirm</p>
        <button type="button" onClick={onConfirmHandler}>
          Yes, delete
        </button>
        <button type="button" onClick={onUnconfirmHandler}>
          No
        </button>
      </Fragment>
    );
  } else {
    const onResetHandler = () => {
      setState({
        ...state,
        confirmed: false,
        deleted: false,
        value: ""
      });
    };
    return (
      <Fragment>
        <p>Deleted Successfully</p>
        <button type="button" onClick={onResetHandler}>
          Reset
        </button>
      </Fragment>
    );
  }
};

export default UseState;
