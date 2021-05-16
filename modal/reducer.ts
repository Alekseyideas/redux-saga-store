import { Reducer } from 'redux';
import ActionTypes, { TModalState } from './types';

export const initialState: TModalState = {
  data: null,
};

const reducer: Reducer<TModalState> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_MODAL:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export { reducer as ModalReducer };
