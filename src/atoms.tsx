import { atom } from "recoil";

export interface ITodo {
  id: number;
  text: string;
}

interface ITodos {
  [key: string]: ITodo[];
}

export const todosState = atom<ITodos>({
  key: "todos",
  default: {
    "To Do": [
      { id: 12, text: "hello" },
      { id: 13, text: "hellooo" },
    ],
    Doing: [],
    Done: [],
  },
});
