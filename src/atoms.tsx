import { atom } from "recoil";

export const todosState = atom({
  key: "todos",
  default: ["a", "b", "c", "d", "e"],
});
