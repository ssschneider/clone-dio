import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./pages/feed/feed";
import HomePage from "./pages/home/home"
import Login from "./pages/login/login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/feed" element={<Feed />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
