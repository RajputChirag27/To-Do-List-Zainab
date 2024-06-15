

import React, { useState, useEffect } from 'react';
import axiosInstance from '../configs/axiosConfig';
import UpdateTask from './UpdateTask';
import DeleteTask from './DeleteTask';

const TaskList = ({ refresh, onRefresh }) => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, [refresh]);

  const fetchTasks = () => {
    axiosInstance.get('/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  };

  return (
    <div>
        <h2 className='text-emphasis-dark text-center'>Tasks List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            <span>{task.title}</span>
            <div>
              <button className="edit" onClick={() => setSelectedTask(task)}>Edit</button>
              <DeleteTask taskId={task._id} onDelete={onRefresh} />
            </div>
          </li>
        ))}
      </ul>
      {selectedTask && <UpdateTask task={selectedTask} onUpdate={onRefresh} onClose={() => setSelectedTask(null)} />}
    </div>
  );
};

export default TaskList;
