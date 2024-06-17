// const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// function saveTasks() {
//   localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// export function addTask(description) {
//   const task = {
//     description,
//     completed: false,
//     index: tasks.length + 1,
//   };
//   tasks.push(task);
//   saveTasks();
// }

// export function deleteTask(index) {
//   tasks.splice(index - 1, 1);
//   tasks.forEach((task, i) => {
//     task.index = i + 1;
//   });
//   saveTasks();
// }

// export function editTask(index, newDescription) {
//   tasks[index - 1].description = newDescription;
//   saveTasks();
// }

// export function toggleTaskCompletion(index) {
//     tasks[index - 1].completed = !tasks[index - 1].completed;
//     saveTasks();
//   }
 
//   export function clearCompletedTasks() {
//     tasks = tasks.filter(task => !task.completed);
//     updateIndexes();
//     saveTasks();
//   }

// export function getTasks() {
//   return tasks;
// }
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

export function getTasks() {
  return tasks;
}

export function addTask(description) {
  const newTask = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(newTask);
  saveTasks();
}

export function deleteTask(index) {
  tasks = tasks.filter(task => task.index !== index);
  updateIndexes();
  saveTasks();
}

export function editTask(index, description) {
  const task = tasks.find(task => task.index === index);
  if (task) {
    task.description = description;
    saveTasks();
  }
}

export function toggleTaskCompletion(index) {
  const task = tasks.find(task => task.index === index);
  if (task) {
    task.completed = !task.completed;
    saveTasks();
  }
}

export function clearCompletedTasks() {
  tasks = tasks.filter(task => !task.completed);
  updateIndexes();
  saveTasks();
}

function updateIndexes() {
  tasks.forEach((task, i) => {
    task.index = i + 1;
  });
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
