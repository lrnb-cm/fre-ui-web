import { makeVar } from "@apollo/client";

// shape of your local state
export interface newState {
  id: string;
  title: string;
  description: string;
  searchString: string;
  models: Array<Object>;
}
// Create the initial value
export type newStates = newState;
const initialState: newStates = {
  id: generateRandomId(),
  title: "",
  description: "",
  searchString: "",
  models: []
}

function generateRandomId(): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

export const newLocalstate = makeVar<newStates>(initialState);