import './App.css';
import AddTodos from './components/AddTodos';
import ListTodo from './components/ListTodo';
function App() {
  return (
    <div className="App">
        <h1>Todo List</h1>
        <AddTodos/>
        <ListTodo/>
    </div>
  );
}

export default App;
