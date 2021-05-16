import { action } from 'typesafe-actions';
import ActionTypes, { TModalState } from './types';

export const setInfoModal = (payload: TModalState['data'] | null) =>
  action(ActionTypes.SET_MODAL, payload || null);
