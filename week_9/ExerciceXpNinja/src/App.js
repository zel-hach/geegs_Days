import './App.css';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import { TaskProvider } from './context/TaskContext';

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Task manager</h1>
          <p className="App-subtitle">useContext + useReducer</p>
          <AddTaskForm />
          <TaskList />
        </header>
      </div>
    </TaskProvider>
  );
}

export default App;
