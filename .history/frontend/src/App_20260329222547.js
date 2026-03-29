import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Questions from "./pages/Questions";
import Home from "./pages/Home";
import QuestionDetail from "./pages/QuestionDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/questions" element={<Questions />} />
  <Route path="/questions/:id" element={<QuestionDetail />} />
</Routes>
    </Router>
  );
}

export default App;