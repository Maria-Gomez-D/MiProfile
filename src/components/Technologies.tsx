import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
// Material UI icons
import AndroidIcon from '@mui/icons-material/Android';
import DataObjectIcon from '@mui/icons-material/DataObject';
import TerminalIcon from '@mui/icons-material/Terminal';

interface TechnologyProps {
  name: string;
  iconPath: string;
  isMaterialIcon?: boolean;
}

const technologies: TechnologyProps[] = [
  { name: 'React', iconPath: process.env.PUBLIC_URL + '/tech-icons/react.svg' },
  { name: 'Next.js', iconPath: process.env.PUBLIC_URL + '/tech-icons/nextjs.svg' },
  { name: 'TypeScript', iconPath: process.env.PUBLIC_URL + '/tech-icons/typescript.svg' },
  { name: 'JavaScript', iconPath: process.env.PUBLIC_URL + '/tech-icons/javascript.svg' },
  { name: 'Tailwind', iconPath: process.env.PUBLIC_URL + '/tech-icons/tailwind.svg' },
  { name: 'Node.js', iconPath: process.env.PUBLIC_URL + '/tech-icons/nodejs.svg' },
  { name: 'Java', iconPath: process.env.PUBLIC_URL + '/tech-icons/java.svg' },
  { name: 'AWS', iconPath: process.env.PUBLIC_URL + '/tech-icons/aws.svg' },
  { name: 'Vercel', iconPath: process.env.PUBLIC_URL + '/tech-icons/vercel.svg' },
  { name: 'Firebase', iconPath: process.env.PUBLIC_URL + '/tech-icons/firebase.svg' },
  { name: 'HTML5', iconPath: process.env.PUBLIC_URL + '/tech-icons/html5.svg' },
  { name: 'CSS3', iconPath: process.env.PUBLIC_URL + '/tech-icons/css3.svg' },
  { name: 'PostgreSQL', iconPath: process.env.PUBLIC_URL + '/tech-icons/postgresql.svg' },
  { name: 'Android', iconPath: '', isMaterialIcon: true },
  { name: 'Python', iconPath: '', isMaterialIcon: true },
  { name: 'Linux/Bash', iconPath: '', isMaterialIcon: true },
];

const Technologies = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, techName: string) => {
    console.error(`Error loading icon for ${techName}:`, e);
    const img = e.target as HTMLImageElement;
    console.log('Attempted URL:', img.src);
  };

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
                      {tech.isMaterialIcon ? (
                        tech.name === 'Android' ? (
                          <AndroidIcon sx={{ fontSize: 40, color: '#3DDC84' }} />
                        ) : tech.name === 'Python' ? (
                          <DataObjectIcon sx={{ fontSize: 40, color: '#3776AB' }} />
                        ) : (
                          <TerminalIcon sx={{ fontSize: 40, color: '#FCC624' }} />
                        )
                      ) : (
                        <Box
                          component="img"
                          src={tech.iconPath}
                          alt={tech.name}
                          onError={(e) => handleImageError(e, tech.name)}
                          sx={{
                            width: '40px',
                            height: '40px',
                            marginBottom: '4px',
                          }}
                        />
                      )}
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
