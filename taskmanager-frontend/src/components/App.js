

import React from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';
import '../index';

const App = () => {
  const [refresh, setRefresh] = React.useState(false);

  const handleRefresh = () => setRefresh(!refresh);

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <AddTask onAdd={handleRefresh} />
      <TaskList refresh={refresh} onRefresh={handleRefresh} />
    </div>
  );
};

export default App;
