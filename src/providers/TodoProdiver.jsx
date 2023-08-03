import React, { createContext, useState } from 'react';
import { data } from '../data/todo.data';
export const TodoContext = createContext();

const TodoProdiver = ({ children }) => {
  const [todos, setTodos] = useState(data);

  const removeTodo = id => {
    setTodos([...todos].filter(t => t.id != id));
  };
  const changeTodo = id => {
    const copyTodo = [...todos];
    const currentTodo = copyTodo.find(t => t.id === id);
    currentTodo.isCompleted = !currentTodo.isCompleted;
    setTodos(copyTodo);
  };

  return (
    <TodoContext.Provider value={{ todos, setTodos, removeTodo, changeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProdiver;
