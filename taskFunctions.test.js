

import { editTaskDescription, updateTaskStatus, clearCompletedTasks } from './taskFunctions';

describe('Task Functions', () => {
  let tasks = [];

  beforeEach(() => {
    tasks = [
      { description: 'clean house', completed: true, index: 0 },
      { description: 'wash dishes', completed: true, index: 1 },
      { description: 'watch movie', completed: false, index: 2 },
    ];
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });

  afterEach(() => {
    localStorage.clear();
  });

  describe('editTaskDescription', () => {
    test('should edit the task description', () => {
      const newDescription = 'clean the house thoroughly';
      const updatedTask = editTaskDescription(tasks, 0, newDescription);

      expect(updatedTask.description).toBe(newDescription);
      expect(JSON.parse(localStorage.getItem('tasks'))[0].description).toBe(newDescription);
    });
  });

  describe('updateTaskStatus', () => {
    test('should update the task status', () => {
      const updatedTask = updateTaskStatus(tasks, 2, true);

      expect(updatedTask.completed).toBe(true);
      expect(JSON.parse(localStorage.getItem('tasks'))[2].completed).toBe(true);
    });
  });

  describe('clearCompletedTasks', () => {
    test('should clear all completed tasks', () => {
      const activeTasks = clearCompletedTasks(tasks);

      expect(activeTasks.length).toBe(1);
      expect(activeTasks[0].description).toBe('watch movie');
      expect(JSON.parse(localStorage.getItem('tasks')).length).toBe(1);
    });
  });
});
