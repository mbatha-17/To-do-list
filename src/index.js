import './style.css';
import { addTask, renderTasks } from './tasks'

const tasks = [
  { description: 'clean house', completed: true, index: 0 },
  { description: 'wash dishes', completed: true, index: 1 },
  { description: 'watch movie', completed: false, index: 2 },
];
document.getElementById('add-task-button').addEventListener('click', () => {
  const taskInput = document.getElementById('new-task-input');
  const taskDescription = taskInput.value.trim();
  if (taskDescription) {
    addTask(taskDescription);
    taskInput.value = '';
  }
});

const renderTasks = () => {
  const todoList = document.getElementById('todo-list');
  tasks.sort((a, b) => a.index - b.index).forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.description;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleTaskCompletion(index));
    
    const ellipsisIcon = document.createElement('span');
    ellipsisIcon.className = 'ellipsis-icon';
    ellipsisIcon.innerHTML = '&#x22EE;'; 

    li.appendChild(checkbox);
    li.appendChild(ellipsisIcon); 

    todoList.appendChild(li);
  });
};

document.addEventListener('DOMContentLoaded', renderTasks);
