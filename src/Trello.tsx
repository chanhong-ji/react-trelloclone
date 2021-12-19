import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todosState } from "./atoms";
import Board from "./components/Board";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const Trello = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  function onDragEnd({ source, destination, draggableId }: DropResult) {
    if (!destination) {
      return;
    }
    // setTodos((todos) => {
    //   const copiedTodos = [...todos];
    //   copiedTodos.splice(source.index, 1);
    //   copiedTodos.splice(destination?.index, 0, draggableId);
    //   return copiedTodos;
    // });
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
