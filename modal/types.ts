export interface TModalState {
  data: {
    title?: string;
    mess: string;
    isError?: boolean;
  } | null;
}

enum ActionTypes {
  SET_MODAL = '@@modal/SET_MODAL',
}

export default ActionTypes;
