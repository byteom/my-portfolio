import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import OtherTraining from './pages/OtherTraining';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header Section with Day/Night Toggle */}
        <Header />
        
        {/* Navigation Bar */}
        <NavBar />

        {/* Main Content */}
        <main className="flex-grow bg-gray-50 dark:bg-gray-800 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/other-training" element={<OtherTraining />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer Section */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
