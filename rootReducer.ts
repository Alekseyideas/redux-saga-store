import { combineReducers } from 'redux';
import { ModalReducer } from './modal/reducer';

const rootReducer = combineReducers({
  Modal: ModalReducer,
});

export default rootReducer;
