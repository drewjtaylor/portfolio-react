import PortfolioNavbar from './components/PortfolioNavbar';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
        <PortfolioNavbar />
        <Routes>
            <Route path='/' element={HomePage}/>
            <Route path='projects' element={ProjectsPage}/>
            <Route path='contact' element={ContactPage}/>
        </Routes>
    </>
  );
}

export default App;
