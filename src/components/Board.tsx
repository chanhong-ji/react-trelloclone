import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { ITodo, todosState } from "../atoms";
import DraggableCard from "./DraggableCard";

const Container = styled.div<{ isDragging: boolean }>`
  width: 300px;
  border-radius: 5px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${(p) => p.theme.color.board};
  opacity: ${(p) => (p.isDragging ? 0.7 : 1)};
  border: 1px solid ${(p) => p.theme.color.border};
`;

const Title = styled.h2<{ isDragging: boolean }>`
  text-align: center;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 25px;
  background-color: ${(p) =>
    p.isDragging ? p.theme.color.accent : "transparent"};
  color: ${(p) => (p.isDragging ? "white" : p.theme.color.accent)};
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
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  input {
    width: 100%;
    height: 35px;
    border: 1px solid ${(p) => p.theme.color.border};
    border-radius: 6px;
    padding-left: 10px;
    outline-color: rgba(0, 0, 0, 0.4);
    font-size: 15px;
    ::placeholder {
      color: rgba(0, 0, 0, 0.4);
    }
  }
  .submit {
    color: ${(p) => p.theme.color.accent};
    opacity: 0.7;
    margin-left: 10px;
  }
`;
interface IBoardProps {
  todos: ITodo[];
  boardId: string;
  index: number;
}

interface IAreaProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}

interface IForm {
  todo: string;
}

const Board = ({ todos, boardId, index }: IBoardProps) => {
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
    <Draggable draggableId={boardId} index={index}>
      {(provided, info) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          isDragging={info.isDragging}
        >
          <Title {...provided.dragHandleProps} isDragging={info.isDragging}>
            {boardId}
          </Title>
          <Form onSubmit={handleSubmit(onValid)}>
            <input
              {...register("todo", { required: "Required" })}
              placeholder='Write Todo...'
            />
            <FaCheck className='submit' onClick={handleSubmit(onValid)} />
          </Form>
          <Droppable droppableId={boardId} type='card'>
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
                    boardId={boardId}
                  />
                ))}
                {provided.placeholder}
              </Area>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
};

export default React.memo(Board);
