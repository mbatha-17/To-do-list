

// import './style.css';
// import { toggleTaskCompletion, clearCompletedTasks } from './modules/status.js';

// let tasks = JSON.parse(localStorage.getItem('tasks')) || [
//   { description: 'clean house', completed: true, index: 0 },
//   { description: 'wash dishes', completed: true, index: 1 },
//   { description: 'watch movie', completed: false, index: 2 },
// ];

// const renderTasks = () => {
//   const todoList = document.getElementById('todo-list');
//   todoList.innerHTML = '';

//   tasks.sort((a, b) => a.index - b.index).forEach((task, index) => {
//     const li = document.createElement('li');
//     li.textContent = task.description;
  
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
      toggleTaskCompletion(tasks, index);
      renderTasks();
    });

    const ellipsisIcon = document.createElement('span');
    ellipsisIcon.className = 'ellipsis-icon';
    ellipsisIcon.innerHTML = '&#x22EE;';

    li.appendChild(checkbox);
    li.appendChild(ellipsisIcon);
    todoList.appendChild(li);
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
