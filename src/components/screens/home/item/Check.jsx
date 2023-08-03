import React from 'react';
import { BsCheck } from 'react-icons/bs';
const Check = ({ isCompleted }) => {
  return (
    <div
      className={`border-2 rounded-lg w-6 h-6 border-purple-500 mr-3 flex items-center justify-center ${
        isCompleted ? 'bg-purple-600' : ''
      }`}>
      {isCompleted && <BsCheck size={24} />}
    </div>
  );
};

export default Check;
