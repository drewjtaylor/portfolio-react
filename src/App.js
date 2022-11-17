import PortfolioNavbar from './components/PortfolioNavbar';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import ProjectsPage from './pages/ProjectsPage';
import HorizontalDecoration from './pieces/HorizontalDecoration';

import Container from 'react-bootstrap/Container';

import './App.css';
import './Fonts.css';

import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
            <PortfolioNavbar />
            <HorizontalDecoration />
            <Container className='left-line stretch-height'>
                <Routes>
                    <Route path='/' element={<HomePage />}/>
                    <Route path='projects' element={<ProjectsPage />}/>
                    <Route path='contact' element={<ContactPage />}/>
                    <Route path='about' element={<AboutMe />}/>

                </Routes>
            </Container>
    </>
  );
}

export default App;
