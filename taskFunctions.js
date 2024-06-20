

export const editTaskDescription = (tasks, index, newDescription) => {
    tasks[index].description = newDescription;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return tasks[index];
  };

export const updateTaskStatus = (tasks, index, completed) => {
    tasks[index].completed = completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return tasks[index];
  };

export const clearCompletedTasks = (tasks) => {
    const activeTasks = tasks.filter(task => !task.completed);
    localStorage.setItem('tasks', JSON.stringify(activeTasks));
    return activeTasks;
  };
  