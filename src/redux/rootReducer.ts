import { combineReducers } from 'redux';
import ratesReducer from './rates/slices';
import topReducer from './top/slices';
import walletReducer from './wallet/slices';

const rootReducer = combineReducers({
  rates: ratesReducer,
  top: topReducer,
  wallet: walletReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
