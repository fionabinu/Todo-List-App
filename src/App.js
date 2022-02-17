
import './App.css';
import { useSelector } from "react-redux";
import TodoList from './components/TodoList';
import AddDetails from "./components/AddDetails";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom"

function App() {
  const state =useSelector((state)=>({ ...state}));
  console.log("state",state);
  return (
    <div className="App">
      <Router>
            <Routes >
              <Route path="/" element={<TodoList />}/>
              <Route path="/add" element={<AddDetails />}/>
              <Route path="/update/:id" element={<AddDetails />}/>
            </Routes >
      </Router>
      
    </div>
  );
}

export default App;
