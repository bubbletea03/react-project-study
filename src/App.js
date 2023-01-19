import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemCard from './component/ItemCard';
import Todo from './component/Todo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
				<Routes>
					<Route path="*" element={<div>Not Found</div>} />
					<Route path="/" element={<ItemCard/>} />
					<Route path="/todo-1" element={<Todo/>} />
          <Route path="/todo-2" element={<Todo/>} />
          <Route path="/todo-3" element={<Todo/>} />
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
