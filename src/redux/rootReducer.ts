import { combineReducers } from 'redux';
import ratesReducer from './rates/slices';

const rootReducer = combineReducers({
  rates: ratesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
