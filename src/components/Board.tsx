import { Droppable } from "react-beautiful-dnd";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { ITodo, todosState } from "../atoms";
import DraggableCard from "./DraggableCard";

const Wrapper = styled.div`
  width: 300px;
  padding-top: 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

const Area = styled.div<IAreaProps>`
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#dfe6e9"
      : props.isDraggingFromThis
      ? "#b2bec3"
      : "transparent"};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
  padding: 20px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  padding: 0 20px;
  input {
    width: 100%;
    height: 30px;
    border: none;
  }
  button {
    background: none;
    border: none;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
interface IBoardProps {
  todos: ITodo[];
  boardId: string;
}

interface IAreaProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}

interface IForm {
  todo: string;
}

const Board = ({ todos, boardId }: IBoardProps) => {
  const setTodos = useSetRecoilState(todosState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  function onValid({ todo }: IForm) {
    const newTodo = {
      id: Date.now(),
      text: todo,
    };
    setTodos((prevBoards) => {
      return {
        ...prevBoards,
        [boardId]: [...prevBoards[boardId], newTodo],
      };
    });
    setValue("todo", "");
  }

  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("todo", { required: "Required" })}
          placeholder="Write Todo..."
        />
        <button>Create</button>
      </Form>
      <Droppable droppableId={boardId}>
        {(provided, info) => (
          <Area
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={info.isDraggingOver}
            isDraggingFromThis={Boolean(info.draggingFromThisWith)}
          >
            {todos.map((todo, index) => (
              <DraggableCard
                todoText={todo.text}
                todoId={todo.id}
                index={index}
                key={todo.id}
              />
            ))}
            {provided.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
};

export default Board;
