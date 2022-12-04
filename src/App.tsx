import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cadastro } from "./pages/register/register";
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
        <Route path="/cadastro" element={<Cadastro />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
