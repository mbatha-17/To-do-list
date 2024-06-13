let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
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
  tasks = tasks.filter((task, i) => i !== index);
  tasks = tasks.map((task, i) => ({ ...task, index: i + 1 }));
  saveTasks();
  renderTasks();
};

const editTask = (index, newDescription) => {
  tasks[index].description = newDescription;
  saveTasks();
  renderTasks();
};

const renderTasks = () => {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    const input = document.createElement('input');
    input.value = task.description;
    input.addEventListener('change', (e) => editTask(index, e.target.value));
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(index));
    li.appendChild(input);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
};

document.addEventListener('DOMContentLoaded', renderTasks);

export { addTask, deleteTask, editTask, renderTasks };
