import './style.css';
import { addTask, renderTasks } from './tasks'

document.getElementById('add-task-button').addEventListener('click', () => {
  const taskInput = document.getElementById('new-task-input');
  const taskDescription = taskInput.value.trim();
  if (taskDescription) {
    addTask(taskDescription);
    taskInput.value = '';
  }
});

document.addEventListener('DOMContentLoaded', renderTasks);
