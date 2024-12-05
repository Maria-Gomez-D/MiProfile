import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
// Core icons
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import AndroidIcon from '@mui/icons-material/Android';
import TerminalIcon from '@mui/icons-material/Terminal';
import DataObjectIcon from '@mui/icons-material/DataObject';
// Cloud and deployment icons
import CloudIcon from '@mui/icons-material/Cloud';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
// Development tools
import BuildIcon from '@mui/icons-material/Build';
import BugReportIcon from '@mui/icons-material/BugReport';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import WebIcon from '@mui/icons-material/Web';
import DnsIcon from '@mui/icons-material/Dns';
import GitHubIcon from '@mui/icons-material/GitHub';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

interface TechnologyProps {
  name: string;
  icon: React.ReactNode;
}

const technologies: TechnologyProps[] = [
  {
    name: 'React',
    icon: <WebIcon sx={{ fontSize: 40, color: '#61DAFB' }} />,
  },
  {
    name: 'Next.js',
    icon: <WebIcon sx={{ fontSize: 40, color: '#000000' }} />,
  },
  {
    name: 'TypeScript',
    icon: <CodeIcon sx={{ fontSize: 40, color: '#3178C6' }} />,
  },
  {
    name: 'JavaScript',
    icon: <JavascriptIcon sx={{ fontSize: 40, color: '#F7DF1E' }} />,
  },
  {
    name: 'Tailwind',
    icon: <CssIcon sx={{ fontSize: 40, color: '#38B2AC' }} />,
  },
  {
    name: 'Node.js',
    icon: <IntegrationInstructionsIcon sx={{ fontSize: 40, color: '#339933' }} />,
  },
  {
    name: 'Java',
    icon: <CodeIcon sx={{ fontSize: 40, color: '#007396' }} />,
  },
  {
    name: 'AWS',
    icon: <CloudIcon sx={{ fontSize: 40, color: '#FF9900' }} />,
  },
  {
    name: 'Vercel',
    icon: <CloudCircleIcon sx={{ fontSize: 40, color: '#000000' }} />,
  },
  {
    name: 'Firebase',
    icon: <DnsIcon sx={{ fontSize: 40, color: '#FFCA28' }} />,
  },
  {
    name: 'HTML5',
    icon: <HtmlIcon sx={{ fontSize: 40, color: '#E34F26' }} />,
  },
  {
    name: 'CSS3',
    icon: <CssIcon sx={{ fontSize: 40, color: '#1572B6' }} />,
  },
  {
    name: 'Figma',
    icon: <DesignServicesIcon sx={{ fontSize: 40, color: '#F24E1E' }} />,
  },
  {
    name: 'Git',
    icon: <GitHubIcon sx={{ fontSize: 40, color: '#F05032' }} />,
  },
  {
    name: 'ESLint',
    icon: <BugReportIcon sx={{ fontSize: 40, color: '#4B32C3' }} />,
  },
  {
    name: 'Docker',
    icon: <StorageIcon sx={{ fontSize: 40, color: '#2496ED' }} />,
  },
  {
    name: 'SQL',
    icon: <StorageIcon sx={{ fontSize: 40, color: '#4479A1' }} />,
  },
  {
    name: 'MongoDB',
    icon: <StorageIcon sx={{ fontSize: 40, color: '#47A248' }} />,
  },
  {
    name: 'PostgreSQL',
    icon: <StorageIcon sx={{ fontSize: 40, color: '#336791' }} />,
  },
  {
    name: 'Android',
    icon: <AndroidIcon sx={{ fontSize: 40, color: '#3DDC84' }} />,
  },
  {
    name: 'Python',
    icon: <DataObjectIcon sx={{ fontSize: 40, color: '#3776AB' }} />,
  },
  {
    name: 'Linux/Bash',
    icon: <TerminalIcon sx={{ fontSize: 40, color: '#FCC624' }} />,
  },
];

const Technologies = () => {
  return (
    <Box
      id="technologies"
      component={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      sx={{
        py: 8,
        background: 'linear-gradient(180deg, #1E293B 0%, #0F172A 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component={motion.h2}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          sx={{
            mb: 6,
            textAlign: 'center',
            background: 'linear-gradient(45deg, #60A5FA, #93C5FD)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontWeight: 'bold',
          }}
        >
          Technologies & Tools
        </Typography>

        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: 4,
            backgroundColor: 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(96, 165, 250, 0.1)',
          }}
        >
          <Grid container spacing={3} justifyContent="center">
            {technologies.map((tech, index) => (
              <Grid item key={tech.name} xs={4} sm={3} md={2}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      textAlign: 'center',
                      backgroundColor: 'rgba(15, 23, 42, 0.6)',
                      border: '1px solid rgba(96, 165, 250, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        backgroundColor: 'rgba(96, 165, 250, 0.1)',
                      },
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      component={motion.div}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      sx={{ mb: 1 }}
                    >
                      {tech.icon}
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.primary',
                        fontWeight: 500,
                        fontSize: '0.875rem',
                      }}
                    >
                      {tech.name}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Technologies;
