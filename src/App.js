import "./reset.css";
import "./assets/fonts/font.scss";
import "./App.css";
import MainPage from "../src/shared/pages/mainPage/mainPage";
import LoginedPage from "../src/shared/pages/loginedPage/loginedPage";
import Singlepage from "./shared/pages/singlePage/singlePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/Dashboard" element={<LoginedPage />} />
          <Route exact path="/EditPage" element={<Singlepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
