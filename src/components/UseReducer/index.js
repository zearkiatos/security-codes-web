import React, { Fragment, useReducer, useEffect } from "react";
import { ACTION_TYPES } from "../../types";
import config from "../../config";
const INITIAL_STATE = {
  value: "",
  error: false,
  loading: false,
  deleted: false,
  confirmed: false
};

const reducerObject = (state = INITIAL_STATE, payload = {}) => ({
  [ACTION_TYPES.ERROR]: {
    ...state,
    error: true,
    loading: false
  },
  [ACTION_TYPES.CHECK]: {
    ...state,
    loading: true
  },
  [ACTION_TYPES.CONFIRM]: {
    ...state,
    error: false,
    loading: false,
    confirmed: true
  },
  [ACTION_TYPES.DELETE]: {
    ...state,
    confirmed: false,
    deleted: true
  },
  [ACTION_TYPES.RESET]: {
    ...state,
    confirmed: false,
    deleted: false,
    value: ""
  },
  [ACTION_TYPES.CHANGE]: {
    ...state,
    value: payload.value
  }
});

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  }

  return state;
};

const FAKE_LOADING_TIMER = 3000;

const UseReducer = ({ name }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const onCheck = () =>
    dispatch({
      type: ACTION_TYPES.CHECK
    });

  const onChange = (value) =>
    dispatch({
      type: ACTION_TYPES.CHANGE,
      payload: {
        value
      }
    });

  const onDelete = () =>
    dispatch({
      type: ACTION_TYPES.DELETE
    });

  const onReset = () =>
    dispatch({
      type: ACTION_TYPES.RESET
    });

  const onConfirm = () =>
    dispatch({
      type: ACTION_TYPES.CONFIRM
    });

  const onError = () =>
    dispatch({
      type: ACTION_TYPES.ERROR
    });

  const onClickHandle = () => onCheck();

  const onChangeHandle = ({ target: { value } }) => onChange(value);

  useEffect(() => {
    state.loading &&
      setTimeout(() => {
        if (state.value === config.SECURITY_CODE) {
          onConfirm();
        } else {
          onError();
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
      onDelete();
    };

    const onUnconfirmHandler = () => {
      onReset();
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
    const onResetHandler = () => onReset();
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

export default UseReducer;
