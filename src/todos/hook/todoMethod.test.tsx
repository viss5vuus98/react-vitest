import { describe, test, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useTodo, { type Todo } from './useTodo';

describe('useTodo', () => {
  let result: { current: ReturnType<typeof useTodo> };

  beforeEach(() => {
    const hook = renderHook(useTodo);
    result = hook.result;
  });

  test('should add new todo', () => {
    act(() => {
      result.current.addTodo('Learn TDD');
    });

    expect(result.current.todos).toEqual([
      { id: 1, text: 'Learn TDD', completed: false },
    ]);
  });

  test('should toggle todo success', () => {
    act(() => {
      result.current.addTodo('Learn TDD');
      result.current.toggleTodo(1);
    });

    expect(result.current.todos).toEqual([
      { id: 1, text: 'Learn TDD', completed: true },
    ]);
  });

  test('should get filter todos', () => {
    let filterTodos: Todo[] = [];

    act(() => {
      result.current.addTodo('Learn TDD');
      result.current.addTodo('english');
      result.current.addTodo('read TDD');

      result.current.toggleTodo(2);
    });
    filterTodos = result.current.filterTodos('active');

    expect(filterTodos).toEqual([
      { id: 1, text: 'Learn TDD', completed: false },
      { id: 3, text: 'read TDD', completed: false },
    ]);
  });

  test('should delete todo', () => {
    act(() => {
      result.current.addTodo('Learn TDD');
      result.current.addTodo('english');
      result.current.addTodo('read TDD');
      result.current.deleteTodo(1);
    });

    expect(result.current.todos).toEqual([
      { id: 2, text: 'english', completed: false },
      { id: 3, text: 'read TDD', completed: false },
    ]);
  });
});
