import { atom, selector } from "recoil";

const defaultBoard = {
  "To Do": [],
  Doing: [],
  Done: [],
};

export interface ITodo {
  id: number;
  text: string;
}

interface ITodos {
  [key: string]: ITodo[];
}

export const todosState = atom<ITodos>({
  key: "todos",
  default: JSON.parse(
    localStorage.getItem("todoBoards") || JSON.stringify(defaultBoard)
  ),
});

export const boardState = selector({
  key: "boardState",
  get: ({ get }) => {
    const todoBoards = get(todosState);
    const boardList = Object.keys(todoBoards);
    return boardList;
  },
});
