import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Html from "./componentes/html"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route exact path="/html" element={<Html />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
