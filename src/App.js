// ...........PARVEEN NOTES...............
// -->

//..............................................................
// .............................................................

// ...........PRERAK NOTES...............
// -->

//..............................................................
// .............................................................

// ...........AAYUSH NOTES...............

//-->

//..............................................................
// .............................................................

// ...........AARAV NOTES...............
// -->

//..............................................................
// .............................................................
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup.js";
import Home from "./pages/home.js";
import Login from "./pages/login.js";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
