import { useEffect } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todosState } from "./atoms";
import Board from "./components/Board";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;

const Trello = () => {
  const [todoBoards, setTodoBoards] = useRecoilState(todosState);

  function onDragEnd({ source, destination }: DropResult) {
    if (!destination) {
      return;
    }
    if (source.droppableId === destination?.droppableId) {
      setTodoBoards((allBoards) => {
        const copiedBoard = [...allBoards[source.droppableId]];
        const targetTodo = copiedBoard.splice(source.index, 1);
        copiedBoard.splice(destination.index, 0, targetTodo[0]);
        return {
          ...allBoards,
          [source.droppableId]: copiedBoard,
        };
      });
    } else {
      setTodoBoards((allBoards) => {
        const fromBoard = [...allBoards[source.droppableId]];
        const toBoard = [...allBoards[destination.droppableId]];
        const targetTodo = fromBoard.splice(source.index, 1);
        toBoard.splice(destination?.index, 0, targetTodo[0]);
        return {
          ...allBoards,
          [source.droppableId]: fromBoard,
          [destination.droppableId]: toBoard,
        };
      });
    }
  }

  useEffect(() => {
    localStorage.setItem("todoBoards", JSON.stringify(todoBoards));
  }, [todoBoards]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(todoBoards).map((boardId) => (
            <Board
              boardId={boardId}
              todos={todoBoards[boardId]}
              key={boardId}
            />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
};

export default Trello;
