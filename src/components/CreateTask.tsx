import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CreateTaskWrapper = styled.div`
  text-align: center;
  padding: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CreateTask: React.FC = () => {
  //   const history = useHistory();
  const [taskName, setTaskName] = useState("");

  interface Task {
    id: number;
    name: string;
  }

  const saveTaskToLocalStorage = (task: Task) => {
    const existingTasksJSON = localStorage.getItem("tasks");
    const existingTasks = existingTasksJSON
      ? JSON.parse(existingTasksJSON)
      : [];

    const updatedTasks = [...existingTasks, task];
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleCreateTask = () => {
    if (taskName) {
      const newTask: Task = {
        id: Date.now(),
        name: taskName,
      };

      saveTaskToLocalStorage(newTask);

      setTaskName("");
    }
  };

  return (
    <CreateTaskWrapper>
      <h1>Create a Task</h1>
      <div>
        <Input
          type="text"
          placeholder="Task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <Link to="/list-tasks">
          <Button onClick={handleCreateTask}>Add Task</Button>
        </Link>
      </div>
    </CreateTaskWrapper>
  );
};

export default CreateTask;
