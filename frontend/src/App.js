import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/users/UserDisplay";
import SignupForm from "./pages/users/Signup";
import LoginForm from "./pages/users/Login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<SignupForm />} />
            <Route path="/display" element={<User />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
