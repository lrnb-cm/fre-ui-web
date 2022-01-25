import { makeVar } from "@apollo/client";

// shape of your local state
export interface state {
  searchString: string;
  provider: string;
  email: string;
  apiKey: string;
  session: number;
  url: string;
  orgid: number;
  items: Number[];
  payload: Object;
  SelectAll: Boolean;
}

// Create the initial value
export type states = state;
const initialState: states = {
  searchString: "",
  provider: "",
  email: "",
  apiKey: "",
  session: 0,
  url: "",
  orgid: 0,
  items: [],
  payload: {},
  SelectAll: false
}

export const localState = makeVar<states>(initialState);
