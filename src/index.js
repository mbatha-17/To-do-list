
import './style.css';
import { toggleTaskCompletion, clearCompletedTasks } from './taskStatus.js';

let tasks = JSON.parse(localStorage.getItem('tasks')) || [
  { description: 'clean house', completed: true, index: 0 },
  { description: 'wash dishes', completed: true, index: 1 },
  { description: 'watch movie', completed: false, index: 2 },
];

const renderTasks = () => {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';

  tasks.sort((a, b) => a.index - b.index).forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task.description;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      toggleTaskCompletion(tasks, index);
      renderTasks();
    });

    const ellipsisIcon = document.createElement('span');
    ellipsisIcon.className = 'ellipsis-icon';
    ellipsisIcon.innerHTML = '&#x22EE;';

    li.appendChild(checkbox);
    li.appendChild(ellipsisIcon);
    todoList.appendChild(li);
  });
};

document.addEventListener('DOMContentLoaded', renderTasks);

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
  tasks = clearCompletedTasks(tasks);
  renderTasks();
});

const newTaskInput = document.getElementById('new-task-input');
newTaskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && newTaskInput.value.trim()) {
    const newTask = {
      description: newTaskInput.value.trim(),
      completed: false,
      index: tasks.length,
    };
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    newTaskInput.value = '';
    renderTasks();
  }
});
