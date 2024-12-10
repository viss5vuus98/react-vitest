import { useState } from 'react';

export const deleteTodo = () => {};
export const filterTodo = () => {};

export const toggleTodo = () => {};

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (newTodo: string) => {
    setTodos(prev => [
      ...prev,
      { id: prev.length + 1, text: newTodo, completed: false },
    ]);
  };

  const deleteTodo = (deleteId: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== deleteId));
  };

  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    );
  };

  const filterTodos = (status: 'active' | 'completed' | 'all') => {
    if (status === 'active') {
      return todos.filter(todo => todo.completed === false);
    }
    if (status === 'completed') {
      return todos.filter(todo => todo.completed === true);
    }
    return todos;
  };

  return { todos, addTodo, deleteTodo, toggleTodo, filterTodos };
};

export default useTodo;
