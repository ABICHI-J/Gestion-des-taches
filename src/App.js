
import './App.css';
import ListTasks from './components/ListTasks';
function App() {
  return (
    <div className="App">
      <div className="task-list-main">
        <h1>Mes tâches</h1>
        <ListTasks />
      </div>
    </div>
  );
}

export default App;
