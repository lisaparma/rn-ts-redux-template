import { Action } from "redux";

export interface IAuthentication extends Action<'AUTH'> {
  auth: boolean
}
