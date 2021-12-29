import { useEffect } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { boardState, todosState } from "./atoms";
import Board from "./components/Board";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Boards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  background-color: pink;
  padding: 10px;
`;

const Trello = () => {
  const [todoBoards, setTodoBoards] = useRecoilState(todosState);
  const [boards, setBoards] = useRecoilState(boardState);

  function onDragEnd({ source, destination, type }: DropResult) {
    if (!destination) {
      return;
    }
    if (type === "board") {
      if (destination?.droppableId !== "boards") {
        return;
      } else {
        setBoards((boards) => {
          const copiedBoards = [...boards];
          const movedBoard = copiedBoards.splice(source.index, 1);
          copiedBoards.splice(destination.index, 0, movedBoard[0]);
          return copiedBoards;
        });
      }
    } else {
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
  }

  useEffect(() => {
    localStorage.setItem("todoBoards", JSON.stringify(todoBoards));
  }, [todoBoards]);

  useEffect(() => {
    localStorage.setItem("boards", JSON.stringify(boards));
  }, [boards]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="boards" direction="horizontal" type="board">
        {(provided, snapshot) => {
          return (
            <Container>
              <Boards ref={provided.innerRef} {...provided.droppableProps}>
                {boards.map((boardId, index) => (
                  <Board
                    boardId={boardId}
                    todos={todoBoards[boardId]}
                    key={boardId}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </Boards>
            </Container>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};

export default Trello;
