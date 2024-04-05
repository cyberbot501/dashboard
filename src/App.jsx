import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import DASHBOARD from "./pages/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<DASHBOARD />} />,
    </Routes>
  </BrowserRouter>
  );
}

export default App;



