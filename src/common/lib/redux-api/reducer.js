/* @flow weak */
import * as actions from './actions';
import { Map } from 'immutable';
import { Record } from '../../transit';

const State = Record({
  errors: Map(), // We need one place to store all Firebase errors.
}, 'api');

// "permission_denied at /users-emails/123: Client doesn't have..."
// const removeStalePermissionDeniedErrors = path => errors => errors
  // .filter((value, key) => key.indexOf(`${path}:`) === -1);

const apiReducer = (state = new State(), action) => {
  switch (action.type) {

    case actions.API_ON_PERMISSION_DENIED: {
      const { message } = action.payload;
      return state.setIn(['errors', message], true);
    }

    case actions.API_ON_QUERY: {
      const { path } = action.payload;
      // return state.update('errors', removeStalePermissionDeniedErrors(path));
      return state.update('errors', path);
    }

    default:
      return state;

  }
};

export default apiReducer;
