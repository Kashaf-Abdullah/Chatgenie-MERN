import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Verify from "./pages/Verify";
import { UserData } from "./context/UserContext";
import { LoadingBig } from "./components/Loading";

const App = () => {
  const { user, isAuth ,loading} = UserData();
  console.log(user)
  return (
       <>
      {loading ? (
        <LoadingBig />
      ) : (
        <Router>
           <Routes>
            <Route path="/" element={isAuth ? <Home /> : <Login />} />
            <Route path="/login" element={isAuth ? <Home /> : <Login />} />
            <Route path="/verify" element={isAuth ? <Home /> : <Verify />} />
          </Routes>
        </Router>
    )}
    </>
  );
};

export default App;