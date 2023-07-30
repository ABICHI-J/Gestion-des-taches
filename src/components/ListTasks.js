import React, { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import "../styles/ListTasks.css";

function ListTasks() {
  const [tasks, setTasks] = useState([]);

	const addTask = task => {
		console.log(task)
		if (task.text.trim()) {
			task.text = task.text.trim();

			const tasksUpdated = [task, ...tasks];
			setTasks(tasksUpdated);
		}
	};

	const deleteTask = id => {
		const tasksUpdated = tasks.filter(task => task.id !== id);
		setTasks(tasksUpdated);
	};

	const completeTask = id => {
		const tasksUpdated = tasks.map(task => {
			if (task.id === id) {
				task.completed = !task.completed;
			}
			return task;
		});
		setTasks(tasksUpdated);
	};

  return (
    <>
      <TaskForm onSubmit={addTask}/>
      <div className="tasks-list-container">
				{
					tasks.map((task) => 
					<Task 
						key={task.id}
						id={task.id}
						text={task.text}
						completed={task.completed}
						completeTask={completeTask}
						deleteTask={deleteTask}
					/>
					)
				}
			</div>
    </>
  );
}

export default ListTasks;
