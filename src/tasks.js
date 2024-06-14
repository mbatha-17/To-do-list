const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function addTask(description) {
  const task = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(task);
  saveTasks();
}

export function deleteTask(index) {
  tasks.splice(index - 1, 1);
  tasks.forEach((task, i) => {
    task.index = i + 1;
  });
  saveTasks();
}

export function editTask(index, newDescription) {
  tasks[index - 1].description = newDescription;
  saveTasks();
}

export function getTasks() {
  return tasks;
}
