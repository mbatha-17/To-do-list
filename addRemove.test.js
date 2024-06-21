import { addTask, deleteTask } from './addRemove';

describe('Task Manager', () => {
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

  describe('addTask', () => {
    test('should add a task to the list', () => {
      const newTaskDescription = 'write tests';
      const newTask = addTask(tasks, newTaskDescription);

      expect(newTask.description).toBe(newTaskDescription);
      expect(newTask.completed).toBe(false);
      expect(newTask.index).toBe(3); // since initial tasks length is 3
      expect(tasks.length).toBe(4);
      expect(JSON.parse(localStorage.getItem('tasks')).length).toBe(4);
    });
  });

  describe('deleteTask', () => {
    test('should delete a task from the list', () => {
      deleteTask(tasks, 1);

      expect(tasks.length).toBe(2);
      expect(tasks[0].description).toBe('clean house');
      expect(tasks[1].description).toBe('watch movie');
      expect(tasks[1].index).toBe(1);
      expect(JSON.parse(localStorage.getItem('tasks')).length).toBe(2);
    });
  });
});

  