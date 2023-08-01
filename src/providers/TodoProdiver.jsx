import React, { createContext, useState } from 'react';
import { data } from '../data/todo.data';
export const TodoContext = createContext();

const TodoProdiver = ({ children }) => {
  const [todos, setTodos] = useState(data);
  const removeTodo = id => {
    setTodos([...todos].filter(t => t.id != id));
  };

  return (
    <TodoContext.Provider value={{ todos, setTodos, removeTodo }}>{children}</TodoContext.Provider>
  );
};

export default TodoProdiver;
