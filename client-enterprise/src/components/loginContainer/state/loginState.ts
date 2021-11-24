import { makeVar } from "@apollo/client";

// shape of your local state
export interface state {
  searchString: string;
  items: Number[];
  orgid: Number;
  SelectAll: Boolean;
}

// Create the initial value
export type states = state;
const initialState: states = {
  searchString: "",
  items: [],
  orgid: 0,
  SelectAll: false
}

export const localState = makeVar<states>(initialState);
