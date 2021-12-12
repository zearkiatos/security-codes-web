import { REDUCER_TYPES } from "../../types";
const INITIAL_STATE = {
  value: "",
  error: false,
  loading: false,
  deleted: false,
  confirmed: false
};

// const reducer = (state = INITIAL_STATE, action ) => {
//     switch (action.type) {
//         case REDUCER_TYPES.ERROR:
//             return {
//                 ...state,
//                 error: true,
//                 loading: false
//             };
//         case REDUCER_TYPES.CHECK:
//             return {
//                 ...state,
//                 loading: true
//             }
//         default:
//             return state;
//     }
// };

const reducerObject = (state = INITIAL_STATE) => ({
  [REDUCER_TYPES.ERROR]: {
    ...state,
    error: true,
    loading: false
  },
  [REDUCER_TYPES.CHECK]: {
    ...state,
    loading: true
  }
});

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state)[action.type];
  }

  return state;
};
