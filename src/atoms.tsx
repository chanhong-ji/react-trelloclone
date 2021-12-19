import { atom } from "recoil";

interface ITodos {
  [key: string]: string[];
}

export const todosState = atom<ITodos>({
  key: "todos",
  default: {
    "To Do": ["a", "b", "c"],
    Doing: ["d", "e"],
    Done: ["f"],
  },
});
