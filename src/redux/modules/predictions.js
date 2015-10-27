const LOADP = 'redux-example/LOADP';
const LOADP_SUCCESS = 'redux-example/LOADP_SUCCESS';
const LOADP_FAIL = 'redux-example/LOADP_FAIL';

const initialState = {
  loaded: false
};

export default function predictions(state = initialState, action = {}) {
  switch (action.type) {
    case LOADP:
      return {
        ...state,
        loading: true
      };
    case LOADP_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result
      };
    case LOADP_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.predictions && globalState.predictions.loaded;
}

export function load() {
  return {
    types: [LOADP, LOADP_SUCCESS, LOADP_FAIL],
    promise: (client) => client.get('/prediction/load')
  };
}
