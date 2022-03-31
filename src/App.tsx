import './static/css/App.scss';
import { Routes, Route } from "react-router-dom";
import Home from './view/home';
import List from './view/list';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
