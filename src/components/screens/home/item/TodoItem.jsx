import React from 'react';
import { BsTrash } from 'react-icons/bs';
import Check from './Check';
const TodoItem = ({ todo, handleRemoveTodo, handleChangeTodo }) => {
  const handleRemoveClick = () => {
    handleRemoveTodo(todo.id);
  };
  const handleChangeClick = () => {
    handleChangeTodo(todo.id);
  };
  return (
    <div className='flex items-center justify-between bg-zinc-800 rounded-2xl mb-4 p-5 w-full'>
      <button className='flex items-center' onClick={handleChangeClick}>
        <Check isCompleted={todo.isCompleted} />
        <span className={`${todo.isCompleted ? 'line-through' : ''}`}>{todo.title}</span>
      </button>
      <button onClick={handleRemoveClick}>
        <BsTrash
          size={24}
          className='text-gray-600 hover:text-purple-400 transition-colors ease-in-out duration-300'
        />
      </button>
    </div>
  );
};

export default TodoItem;
