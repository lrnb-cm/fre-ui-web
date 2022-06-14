import { makeVar } from '@apollo/client';

// shape of your local state
export interface state {
  open: boolean;
  uistate?: string;
}

// Create the initial value
export type states = state;
const initialState: states = {
  open: false,
  uistate: '',
};

export const sidebarVar = makeVar<states>(initialState);
