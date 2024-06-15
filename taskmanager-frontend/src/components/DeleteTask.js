

import React from 'react';
import axiosInstance from '../configs/axiosConfig';

const DeleteTask = ({ taskId, onDelete }) => {
  const handleDelete = () => {
    axiosInstance.delete(`/tasks/${taskId}`)
      .then(() => onDelete())  // Refresh the task list
      .catch(error => console.error('Error deleting task:', error));
  };

  return <button className="delete" onClick={handleDelete}>Delete</button>;
};

export default DeleteTask;
