import { combineReducers } from 'redux';
import { reducer as form} from 'redux-form';
import authReducer from './auth_reducer'

const rootReducer = combineReducers({
  // form: form => es6
  form,
  auth: authReducer
});

export default rootReducer;
