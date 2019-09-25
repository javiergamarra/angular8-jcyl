import { Action } from '@ngrx/store';
import { Usuario } from '../usuario.service';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export class LoginAction implements Action {
  type = LOGIN;
  constructor(public payload) {}
}
export class LogoutAction implements Action {
  type = LOGOUT;
}
export type UsuarioActions = LoginAction | LogoutAction;

export function userReducer(state: Usuario, action: UsuarioActions) {
  switch (action.type) {
    case LOGIN:
      return (action as LoginAction).payload;
    case LOGOUT:
      return '';
    default:
      return state;
  }
}
