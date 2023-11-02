import React from "react";
import styled from "styled-components";

interface Task {
  id: number;
  name: string;
}

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  background-color: #f7f7f7;
`;

const TaskCard: React.FC<{ task: Task }> = ({ task }) => {
  return (
    <Card>
      <h3>{task.name}</h3>
    </Card>
  );
};

export default TaskCard;
