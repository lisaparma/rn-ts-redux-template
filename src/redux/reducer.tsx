//import { Action, Reducer } from "redux";

//import { IStore } from "./IStore";

import {IAuthentication} from "./action";


export const reducer = (
  state = {
    auth: false,
  },
  action: IAuthentication 
) => {
  switch (action.type) {
    case 'AUTH':
      return {
        ...state,
        auth: action.auth,
      };
    default:
      return state;
  }
};