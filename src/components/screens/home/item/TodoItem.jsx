import React from 'react';
import { BsTrash } from 'react-icons/bs';
const TodoItem = ({ todo, handleRemoveTodo }) => {
  const handleRemoveClick = () => {
    handleRemoveTodo(todo.id);
  };
  return (
    <div className=''>
      <button>
        <span>{todo.title}</span>
      </button>
      <button onClick={handleRemoveClick}>
        <BsTrash size={24} />
      </button>
    </div>
  );
};

export default TodoItem;
