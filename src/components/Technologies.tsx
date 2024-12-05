import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import DatabaseIcon from '@mui/icons-material/Storage';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import AndroidIcon from '@mui/icons-material/Android';
import DataObjectIcon from '@mui/icons-material/DataObject';
import TerminalIcon from '@mui/icons-material/Terminal';
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BuildIcon from '@mui/icons-material/Build';
import StorageIcon from '@mui/icons-material/Storage';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import DnsIcon from '@mui/icons-material/Dns';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

interface TechnologyProps {
  name: string;
  icon: React.ReactNode;
}

const technologies: TechnologyProps[] = [
  { name: 'React', icon: <CodeIcon sx={{ fontSize: 40, color: '#60A5FA' }} /> },
  { name: 'Next.js', icon: <WebIcon sx={{ fontSize: 40, color: '#60A5FA' }} /> },
  { name: 'TypeScript', icon: <IntegrationInstructionsIcon sx={{ fontSize: 40, color: '#60A5FA' }} /> },
  { name: 'JavaScript', icon: <JavascriptIcon sx={{ fontSize: 40, color: '#60A5FA' }} /> },
  { name: 'Tailwind', icon: <CssIcon sx={{ fontSize: 40, color: '#60A5FA' }} /> },
  { name: 'Node.js', icon: <CodeIcon sx={{ fontSize: 40, color: '#60A5FA' }} /> },
  { name: 'Java', icon: <CodeIcon sx={{ fontSize: 40, color: '#60A5FA' }} /> },
  { name: 'AWS', icon: <CloudQueueIcon sx={{ fontSize: 40, color: '#60A5FA' }} /> },
  { name: 'Vercel', icon: <CloudCircleIcon sx={{ fontSize: 40, color: '#60A5FA' }} /> },
  { name: 'Firebase', icon: <DnsIcon sx={{ fontSize: 40, color: '#60A5FA' }} /> },
  { name: 'HTML5', icon: <HtmlIcon sx={{ fontSize: 40, color: '#60A5FA' }} /> },
  { name: 'CSS3', icon: <CssIcon sx={{ fontSize: 40, color: '#60A5FA' }} /> },
  { name: 'Figma', icon: <DesignServicesIcon sx={{ fontSize: 40, color: '#60A5FA' }} /> },
  { name: 'Git', icon: <GitHubIcon sx={{ fontSize: 40, color: '#60A5FA' }} /> },
  { name: 'ESLint', icon: <BuildIcon sx={{ fontSize: 40, color: '#60A5FA' }} /> },
  { name: 'Docker', icon: <StorageIcon sx={{ fontSize: 40, color: '#60A5FA' }} /> },
  { name: 'SQL', icon: <DatabaseIcon sx={{ fontSize: 40, color: '#60A5FA' }} /> },
  { name: 'MongoDB', icon: <StorageIcon sx={{ fontSize: 40, color: '#60A5FA' }} /> },
  { name: 'PostgreSQL', icon: <StorageIcon sx={{ fontSize: 40, color: '#60A5FA' }} /> },
  { name: 'Android', icon: <AndroidIcon sx={{ fontSize: 40, color: '#60A5FA' }} /> },
  { name: 'Python', icon: <DataObjectIcon sx={{ fontSize: 40, color: '#60A5FA' }} /> },
  { name: 'Linux/Bash', icon: <TerminalIcon sx={{ fontSize: 40, color: '#60A5FA' }} /> },
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
          <Grid container spacing={2} justifyContent="center">
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
