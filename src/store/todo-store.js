import { create } from 'zustand'

export const useToDoStore = create(() => ({
  todos: [
    {task: 'task1'},
    {task: 'task2'},
    {task: 'task3'}
  ]
}))