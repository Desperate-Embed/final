import KaKao from "./components/Map";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
import { Manage } from "./pages/Manage";
import { Location } from "./pages/Location";
import { Check } from "./pages/Check";

function App() {
  return (
    <div className="App">
      {/* <KaKao></KaKao> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Main" element={<Main />} />
          <Route exact path="/Manage" element={<Manage />} />
          <Route exact path="/Location" element={<Location />} />
          <Route exact path="/Check" element={<Check />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
