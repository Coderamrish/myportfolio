// src/App.js
import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from '../src/theme/theme';
import Navbar from '../src/components/Navbar/Navbar';
import Hero from '../src/components/Hero/Hero';
import About from '../src/components/About/About';
import Education from '../src/components/Education/Education';
import Projects from '../src/components/Projects/projects';
import Skills from '../src/components/Skills/Skills';
import Achievements from '../src/components/Achievements/Achievements';
import Blogs from '../src/components/Blogs/Blogs';
import Resume from '../src/components/Resume/Resume';
import Contact from '../src/components/Contact/Contact';
import Footer from '../src/components/Footer/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ background: 'linear-gradient(135deg, #050a18 0%, #0a0f2e 50%, #050a18 100%)', minHeight: '100vh' }}>
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Achievements />
        <Blogs />
        <Resume />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;