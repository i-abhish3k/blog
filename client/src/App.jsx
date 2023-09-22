import TopBar from "./components/topbar/TopBar";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { Setting } from "./pages/settings/Setting";
import Single from "./pages/single/Single";
import { Write } from "./pages/write/Write";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

const App = () => {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={user ? <Home /> : <Login />} />
        <Route
          exact
          path="/register"
          element={user ? <Home /> : <Register />}
        />
        <Route exact path="/write" element={user ? <Write /> : <Register />} />
        <Route
          exact
          path="/setting"
          element={user ? <Setting /> : <Register />}
        />
        <Route exact path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
};

export default App;
