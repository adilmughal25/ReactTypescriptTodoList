import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface Task {
  id: number;
  name: string;
}

const BulkDeleteWrapper = styled.div`
  text-align: center;
  padding: 20px;
`;

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  background-color: #f7f7f7;
  text-align: center;
`;

const CheckBox = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const BulkDelete: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTaskIds, setSelectedTaskIds] = useState<number[]>([]);

  // Simulate loading tasks from local storage
  useEffect(() => {
    const tasksFromLocalStorage = JSON.parse(
      localStorage.getItem("tasks") || "[]"
    );
    setTasks(tasksFromLocalStorage);
  }, []);

  const toggleTaskSelection = (taskId: number) => {
    if (selectedTaskIds.includes(taskId)) {
      setSelectedTaskIds(selectedTaskIds.filter((id) => id !== taskId));
    } else {
      setSelectedTaskIds([...selectedTaskIds, taskId]);
    }
  };

  const deleteSelectedTasks = () => {
    // Filter out tasks that are not selected
    const remainingTasks = tasks.filter(
      (task) => !selectedTaskIds.includes(task.id)
    );

    // Update the tasks state and save to local storage
    setTasks(remainingTasks);
    localStorage.setItem("tasks", JSON.stringify(remainingTasks));

    // Clear selected task IDs
    setSelectedTaskIds([]);
  };

  return (
    <BulkDeleteWrapper>
      <h1>Bulk Delete Tasks</h1>
      {tasks.length > 0 ? (
        <CardList>
          {tasks.map((task) => (
            <Card key={task.id}>
              <CheckBox
                type="checkbox"
                checked={selectedTaskIds.includes(task.id)}
                onChange={() => toggleTaskSelection(task.id)}
              />
              {task.name}
            </Card>
          ))}
        </CardList>
      ) : (
        <p>No tasks available.</p>
      )}
      {selectedTaskIds.length > 0 && (
        <Button onClick={deleteSelectedTasks}>Delete Selected</Button>
      )}
    </BulkDeleteWrapper>
  );
};

export default BulkDelete;
