
import './style.css';
import { addTask, deleteTask, editTask, getTasks, toggleTaskCompletion, clearCompletedTasks } from './tasks';

const todoListElement = document.getElementById('todo-list');
let tasks = getTasks();

function renderTasks() {
  console.log('Rendering tasks:', tasks);
  todoListElement.innerHTML = '';
  tasks.sort((a, b) => a.index - b.index).forEach((task, index) => {
    const listItem = document.createElement('li');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      toggleTaskCompletion(task.index);
      renderTasks();
    });

    const taskDescription = document.createElement('span');
    taskDescription.textContent = task.description;
    if (task.completed) {
      taskDescription.style.textDecoration = 'line-through';
    }

    const ellipsisIcon = document.createElement('span');
    ellipsisIcon.className = 'ellipsis-icon';
    ellipsisIcon.innerHTML = '&#x22EE;';
    ellipsisIcon.style.cursor = 'pointer';

    const trashIcon = document.createElement('span');
    trashIcon.className = 'trash-icon';
    trashIcon.innerHTML = '&#x1F5D1;'; 
    trashIcon.style.display = 'none'; 
    trashIcon.style.cursor = 'pointer';
    trashIcon.addEventListener('click', () => {
      deleteTask(task.index);
      tasks = getTasks();
      renderTasks();
    });

    ellipsisIcon.addEventListener('click', () => {
      ellipsisIcon.style.display = 'none';
      trashIcon.style.display = 'inline';
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(taskDescription);
    listItem.appendChild(ellipsisIcon);
    listItem.appendChild(trashIcon);
    todoListElement.appendChild(listItem);
  });
}

document.getElementById('new-task-input').addEventListener('keypress', (event) => {
 if (event.key === 'Enter') {
  const taskInput = document.getElementById('new-task-input');
  const taskDescription = taskInput.value.trim();
  console.log('Entered task description:', taskDescription);
  if (taskDescription) {
    addTask(taskDescription);
    tasks = getTasks();
    taskInput.value = '';
    renderTasks();
  }
  }
});

document.getElementById('clear').addEventListener('click', () => {
  clearCompletedTasks();
  tasks = getTasks();
  renderTasks();
  document.getElementById('clear').style.textDecoration = 'underline';
});

window.onload = () => {
  renderTasks();
};
