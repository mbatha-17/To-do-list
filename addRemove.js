
export const addTask = (tasks, taskDescription) => {
    const newTask = {
      description: taskDescription,
      completed: false,
      index: tasks.length,
    };
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return newTask;
  };
  
  export const deleteTask = (tasks, index) => {
    tasks.splice(index, 1);
    tasks.forEach((task, idx) => {
        task.index = idx
  });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  