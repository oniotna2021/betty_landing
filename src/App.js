import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Html from "./componentes/html"
import Youtube from "./componentes/youtube"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route exact path="/" element={<Html />} />
          <Route exact path="/youtube" element={<Youtube />} />
    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
