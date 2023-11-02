import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TaskCard from "./TaskCard";

const ListTasksWrapper = styled.div`
  text-align: center;
  padding: 20px;
`;

const TaskList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ListTasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  interface Task {
    id: number;
    name: string;
  }

  useEffect(() => {
    const tasksFromLocalStorage = JSON.parse(
      localStorage.getItem("tasks") || "[]"
    );
    setTasks(tasksFromLocalStorage);
  }, []);

  return (
    <ListTasksWrapper>
      <h1>List of Tasks</h1>
      {tasks.length > 0 ? (
        <TaskList>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </TaskList>
      ) : (
        <p>No tasks available.</p>
      )}
    </ListTasksWrapper>
  );
};

export default ListTasks;
