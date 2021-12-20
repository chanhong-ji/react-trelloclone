import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
  background-color: ${(props) =>
    props.isDragging ? "#e4f2ff" : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.05)" : "none"};
`;

interface IDraggableCard {
  todoText: string;
  todoId: number;
  index: number;
}

const DraggableCard = ({ todoText, todoId, index }: IDraggableCard) => {
  return (
    <Draggable index={index} draggableId={todoId + ""}>
      {(provided, info) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={info.isDragging}
        >
          {todoText}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DraggableCard);
