import './style.css';

const tasks = [
  { description: 'clean house', completed: false, index: 1 },
  { description: 'wash dishes', completed: true, index: 2 },
  { description: 'watch movie', completed: false, index: 3 },
];

const renderTasks = () => {
  const todoList = document.getElementById('todo-list');
  tasks.sort((a, b) => a.index - b.index).forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.description;
    todoList.appendChild(li);
  });
};

document.addEventListener('DOMContentLoaded', renderTasks);
