import { combineReducers } from 'redux';
import ratesReducer from './rates/slices';
import topReducer from './top/slices';

const rootReducer = combineReducers({
  rates: ratesReducer,
  top: topReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
