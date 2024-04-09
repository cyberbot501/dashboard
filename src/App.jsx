import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import DASHBOARD from "./pages/Dashboard";
import LOGIN from "./pages/login"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LOGIN />} />,
      <Route path="/dashboard" element={<DASHBOARD />} />,
    </Routes>
  </BrowserRouter>
  );
}

export default App;



