import React from 'react';
import { Box, IconButton, Paper, Tooltip } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const DockNavigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navigationItems = [
    { icon: <HomeIcon />, id: 'profile', label: 'Home' },
    { icon: <AccountTreeIcon />, id: 'projects', label: 'Projects' },
    { icon: <CodeIcon />, id: 'technologies', label: 'Technologies' },
    { icon: <WorkIcon />, id: 'experience', label: 'Experience' },
    { icon: <SchoolIcon />, id: 'education', label: 'Education' },
    { icon: <ContactMailIcon />, id: 'contact', label: 'Contact' },
  ];

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: 8,
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        gap: 1,
        p: 1,
        zIndex: 1000,
        border: '1px solid rgba(96, 165, 250, 0.2)',
      }}
    >
      {navigationItems.map((item) => (
        <Tooltip 
          key={item.id} 
          title={item.label} 
          placement="top"
          sx={{ color: 'text.primary' }}
        >
          <IconButton
            onClick={() => scrollToSection(item.id)}
            sx={{
              transition: 'all 0.3s',
              color: 'primary.main',
              '&:hover': {
                transform: 'translateY(-8px) scale(1.1)',
                color: 'primary.light',
                backgroundColor: 'rgba(96, 165, 250, 0.1)',
              },
            }}
          >
            {item.icon}
          </IconButton>
        </Tooltip>
      ))}
    </Paper>
  );
};

export default DockNavigation;
