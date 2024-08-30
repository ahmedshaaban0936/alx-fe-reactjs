// src/Components/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';

test('renders initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  expect(screen.getByText('Write Tests')).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText('Enter a new todo'), {
    target: { value: 'New Todo' },
  });
  fireEvent.click(screen.getByText('Add Todo'));
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggles a todo', () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText('Learn React'));
  expect(screen.getByText('Learn React')).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  fireEvent.click(screen.getAllByText('Delete')[0]);
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
