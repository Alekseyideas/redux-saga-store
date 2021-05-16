import { action } from 'typesafe-actions';

export class Actions {
  requestType: string;
  actionType: any;

  constructor(reqType: string, actionType: any) {
    this.requestType = reqType;
    this.actionType = actionType;
  }
  setAction(type: 'R' | 'S' | 'E') {
    const actionT = this.requestType + '_' + type;
    return this.actionType[actionT];
  }

  request(payload: Object) {
    const actionType = this.setAction('R');
    return action(actionType, payload);
  }
  success(payload: Object) {
    const actionType = this.setAction('S');
    return action(actionType, payload);
  }
  error(message: string) {
    const actionType = this.setAction('E');
    return action(actionType, message);
  }
}
