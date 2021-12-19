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
  const [todos, setTodos] = useRecoilState(todosState);

  function onDragEnd({ source, destination, draggableId }: DropResult) {
    if (!destination) {
      return;
    }

    if (source.droppableId === destination?.droppableId) {
      setTodos((allBoards) => {
        const copiedBoard = [...allBoards[source.droppableId]];
        copiedBoard.splice(source.index, 1);
        copiedBoard.splice(destination.index, 0, draggableId);
        return {
          ...allBoards,
          [source.droppableId]: copiedBoard,
        };
      });
    } else {
      setTodos((allBoards) => {
        const fromBoard = [...allBoards[source.droppableId]];
        const toBoard = [...allBoards[destination.droppableId]];
        fromBoard.splice(source.index, 1);
        toBoard.splice(destination?.index, 0, draggableId);
        return {
          ...allBoards,
          [source.droppableId]: fromBoard,
          [destination.droppableId]: toBoard,
        };
      });
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(todos).map((boardId) => (
            <Board boardId={boardId} todos={todos[boardId]} key={boardId} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
};

export default Trello;
