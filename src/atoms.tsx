import { atom } from "recoil";

interface ITodos {
  [key: string]: string[];
}

export const todosState = atom<ITodos>({
  key: "todos",
  default: {
    todo: ["a", "b", "c"],
    doing: ["d", "e"],
    done: ["f"],
  },
});
