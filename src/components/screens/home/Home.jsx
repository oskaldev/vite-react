import React from 'react';
import TodoItem from './item/TodoItem';
import { useTodo } from '../../../hooks/useTodo';
import CreateTask from './create-task/CreateTask';
const Home = () => {
  const { todos, removeTodo, handleChangeTodo, addTodo } = useTodo();

  return (
    <div className='text-white w-4/5 mx-auto'>
      <h1 className='text-2xl text-center font-bold mb-8'>Todo</h1>
      <CreateTask addTodo={addTodo} />
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleRemoveTodo={removeTodo}
          handleChangeTodo={handleChangeTodo}
        />
      ))}
    </div>
  );
};

export default Home;
