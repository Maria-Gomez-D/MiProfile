import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
// Material UI icons solo para los que no tienen SVG
import AndroidIcon from '@mui/icons-material/Android';
import DataObjectIcon from '@mui/icons-material/DataObject';
import TerminalIcon from '@mui/icons-material/Terminal';

interface TechnologyProps {
  name: string;
  icon: string | React.ReactNode;
  isMaterialIcon?: boolean;
}

// Función para obtener la ruta correcta del icono
const getIconPath = (iconName: string) => {
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://maria-gomez-d.github.io/MiProfile'
    : '';
  return `${baseUrl}/tech-icons/${iconName}`;
};

const technologies: TechnologyProps[] = [
  { name: 'React', icon: getIconPath('react.svg') },
  { name: 'Next.js', icon: getIconPath('nextjs.svg') },
  { name: 'TypeScript', icon: getIconPath('typescript.svg') },
  { name: 'JavaScript', icon: getIconPath('javascript.svg') },
  { name: 'Tailwind', icon: getIconPath('tailwind.svg') },
  { name: 'Node.js', icon: getIconPath('nodejs.svg') },
  { name: 'Java', icon: getIconPath('java.svg') },
  { name: 'AWS', icon: getIconPath('aws.svg') },
  { name: 'Vercel', icon: getIconPath('vercel.svg') },
  { name: 'Firebase', icon: getIconPath('firebase.svg') },
  { name: 'HTML5', icon: getIconPath('html5.svg') },
  { name: 'CSS3', icon: getIconPath('css3.svg') },
  { name: 'Figma', icon: getIconPath('figma.svg') },
  { name: 'Git', icon: getIconPath('git.svg') },
  { name: 'ESLint', icon: getIconPath('eslint.svg') },
  { name: 'Docker', icon: getIconPath('docker.svg') },
  { name: 'SQL', icon: getIconPath('sql.svg') },
  { name: 'MongoDB', icon: getIconPath('mongodb.svg') },
  { name: 'PostgreSQL', icon: getIconPath('postgresql.svg') },
  { name: 'Android', icon: <AndroidIcon sx={{ fontSize: 40, color: '#3DDC84' }} />, isMaterialIcon: true },
  { name: 'Python', icon: <DataObjectIcon sx={{ fontSize: 40, color: '#3776AB' }} />, isMaterialIcon: true },
  { name: 'Linux/Bash', icon: <TerminalIcon sx={{ fontSize: 40, color: '#FCC624' }} />, isMaterialIcon: true },
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
                      {tech.isMaterialIcon ? (
                        tech.icon
                      ) : (
                        <motion.img
                          src={tech.icon as string}
                          alt={tech.name}
                          style={{
                            width: '40px',
                            height: '40px',
                            marginBottom: '4px',
                          }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: 'spring', stiffness: 300 }}
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
