import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeedbackForm from './components/FeedbackForm';
import Login from './pages/Login';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/feedback" element={<FeedbackForm />} />
    </Routes>
  </Router>
);

export default App;