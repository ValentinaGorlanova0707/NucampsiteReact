import { Routes, Route } from "react-router-dom";
import './App.css';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage.js';
import HomePage from "./pages/HomePage.js";
import ContactPage from "./pages/ContactPage.js";
import CampsiteDetailPage from './pages/CampsiteDetailPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='directory' element={<CampsitesDirectoryPage />} />
        <Route path='directory/:campsiteId' element={<CampsiteDetailPage />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
