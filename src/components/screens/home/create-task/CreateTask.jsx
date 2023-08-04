import React from 'react';
import { useState } from 'react';

const CreateTask = ({ addTodo }) => {
  const [newTask, setNewTask] = useState('');
  const handleInputChange = event => {
    setNewTask(event.target.value); // Обновление состояния при изменении инпута
  };
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      addTodo({
        id: Date.now(),
        title: newTask,
        isCompleted: false,
      });
      setNewTask('');
    }
  };
  return (
    <div className='flex items-center justify-between border-zinc-800 border-2 rounded-2xl px-5 py-3 mb-10 w-full'>
      <input
        type='text'
        className='bg-transparent border-none outline-none w-full'
        placeholder='Add a task'
        onChange={handleInputChange}
        value={newTask}
        onKeyDown={e => e.key === 'Enter' && handleAddTask()}
      />
    </div>
  );
};

export default CreateTask;
