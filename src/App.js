import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoWrapper from "./components/TodoWrapper";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <h1>ToDo-List</h1>
      </div>
      <div className="container">
        <h2>Let's Do Our Work!</h2>
        <TodoWrapper />
      </div>
    </div>
  );
}

export default App;
