import React from 'react';
import useTask from '../../../../hooks/useTask';

const CreateTask = ({ addTodo }) => {
  const { newTask, handleInputChange, handleKeyPress } = useTask(addTodo);
  return (
    <div className='flex items-center justify-between border-zinc-800 border-2 rounded-2xl px-5 py-3 mb-10 w-full'>
      <input
        type='text'
        className='bg-transparent border-none outline-none w-full'
        placeholder='Add a task'
        value={newTask}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default CreateTask;
