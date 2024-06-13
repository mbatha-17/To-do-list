// tasks.js
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const renderTasks = () => {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';
  tasks.sort((a, b) => a.index - b.index).forEach((task, index) => {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleTaskCompletion(index));

    const input = document.createElement('input');
    input.type = 'text';
    input.value = task.description;
    input.addEventListener('change', (e) => editTask(index, e.target.value));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(index));

    const ellipsisIcon = document.createElement('span');
    ellipsisIcon.className = 'ellipsis-icon';
    ellipsisIcon.innerHTML = '&#x22EE;'; // Unicode for the ellipsis vertical icon

    li.appendChild(checkbox);
    li.appendChild(input);
    li.appendChild(ellipsisIcon);
    li.appendChild(deleteButton);

    todoList.appendChild(li);
  });
};

const addTask = (description) => {
  const task = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(task);
  saveTasks();
  renderTasks();
};

const deleteTask = (index) => {
  tasks.splice(index, 1);
  tasks.forEach((task, i) => task.index = i + 1);
  saveTasks();
  renderTasks();
};

const editTask = (index, newDescription) => {
  tasks[index].description = newDescription;
  saveTasks();
  renderTasks();
};

const toggleTaskCompletion = (index) => {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
};

document.addEventListener('DOMContentLoaded', renderTasks);

export { addTask, renderTasks };
