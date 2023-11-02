import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListTasks from "./components/ListTasks";
import CreateTask from "./components/CreateTask";
import BulkDelete from "./components/BulkDelete";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/list-tasks" Component={ListTasks} />
          <Route path="/create-task" Component={CreateTask} />
          <Route path="/bulk-delete" Component={BulkDelete} />
          <Route path="/" Component={ListTasks} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
