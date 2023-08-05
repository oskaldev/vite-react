import React, { createContext, useState } from 'react';
import { data } from 'data/todo.data';
import { changeTodoStatus } from 'helpers/todoHelpers';
export const TodoContext = createContext();

const TodoProdiver = ({ children }) => {
  const [todos, setTodos] = useState(data);
  const removeTodo = id => {
    setTodos([...todos].filter(t => t.id != id));
  };
  const handleChangeTodo = id => {
    const updatedTodos = changeTodoStatus(todos, id);
    setTodos(updatedTodos);
  };
  const addTodo = newTodo => {
    setTodos([...todos, newTodo]);
  };
  return (
    <TodoContext.Provider value={{ todos, setTodos, removeTodo, handleChangeTodo, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProdiver;
