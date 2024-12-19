import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DockNavigation from './components/DockNavigation';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import BatchRecord from './pages/BatchRecord';
import CarnivalStore from './pages/CarnivalStore';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#60A5FA', // bright blue
      light: '#93C5FD',
      dark: '#3B82F6',
    },
    secondary: {
      main: '#1E40AF', // darker blue
    },
    background: {
      default: '#1E293B', // dark blue background
      paper: '#0F172A', // darker blue for cards
    },
    text: {
      primary: '#F1F5F9', // light blue-gray
      secondary: '#94A3B8', // muted blue-gray
    },
  },
  typography: {
    fontFamily: '"SF Pro Display", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      color: '#F1F5F9',
    },
    h2: {
      fontWeight: 600,
      color: '#F1F5F9',
    },
    h3: {
      fontWeight: 600,
      color: '#F1F5F9',
    },
    h4: {
      fontWeight: 500,
      color: '#F1F5F9',
    },
    h5: {
      fontWeight: 500,
      color: '#F1F5F9',
    },
    h6: {
      fontWeight: 500,
      color: '#F1F5F9',
    },
    body1: {
      color: '#E2E8F0',
    },
    body2: {
      color: '#CBD5E1',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#0F172A',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#0F172A',
          borderRadius: 16,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#60A5FA',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/MiProfile">
        <Routes>
          <Route path="/" element={
            <>
              <DockNavigation />
              <Profile />
              <Projects />
              <Technologies />
              <Experience />
              <Education />
              <Contact />
            </>
          } />
          <Route path="/batchrecord" element={<BatchRecord />} />
          <Route path="/carnivalstore" element={<CarnivalStore />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
