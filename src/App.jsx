import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import DASHBOARD from "./pages/Dashboard";
import LOGIN from "./pages/login"
import ORDER from "./pages/Order"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LOGIN />} />,
      <Route path="/dashboard" element={<DASHBOARD />} />,
      <Route path="/order" element={<ORDER />} />,
    </Routes>
  </BrowserRouter>
  );
}

export default App;



