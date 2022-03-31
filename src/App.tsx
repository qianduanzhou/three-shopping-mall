import 'static/css/App.scss';
import { Routes, Route } from "react-router-dom";
import Home from 'view/home';
import List from 'view/home/view/list';
import Detail from 'view/home/view/detail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="list" element={<List />} />
          <Route path="detail">
            <Route path=":id" element={<Detail />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>没有相关页面!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
