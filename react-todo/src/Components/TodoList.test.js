import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../TodoList';

test('renders TodoList component', () => {
  render(<TodoList />);
  expect(screen.getByText('Todo List')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Add a new todo')).toBeInTheDocument();
});

test('renders initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Write Tests')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
});

test('allows users to add a new todo', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
    target: { value: 'New Todo' }
  });
  fireEvent.click(screen.getByText('Add Todo'));
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('does not add a todo with empty input', () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText('Add Todo'));
  expect(screen.queryByText('')).not.toBeInTheDocument();
});

test('allows users to toggle a todo', () => {
  render(<TodoList />);
  const todoItem = screen.getByText('Learn React');
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: line-through');
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: none');
});

test('allows users to delete a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText('Delete')[0];
  fireEvent.click(deleteButton);
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});

test('handles multiple todos with same text', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
    target: { value: 'Duplicate Todo' }
  });
  fireEvent.click(screen.getByText('Add Todo'));
  expect(screen.getAllByText('Duplicate Todo').length).toBe(2);
  fireEvent.click(screen.getAllByText('Delete')[0]);
  expect(screen.getAllByText('Duplicate Todo').length).toBe(1);
});