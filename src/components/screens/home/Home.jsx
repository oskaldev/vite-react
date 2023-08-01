import React from 'react';
import TodoItem from './item/TodoItem';
import { useTodo } from '../../../hooks/useTodo';
const Home = () => {
  const { todos, removeTodo } = useTodo();
  const handleRemoveTodo = id => {
    removeTodo(id);
  };
  return (
    <div className='text-white w-4/5 mx-auto'>
      <h1 className='text-2xl text-center font-bold'>Todo</h1>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} handleRemoveTodo={handleRemoveTodo} />
      ))}
    </div>
  );
};

export default Home;
