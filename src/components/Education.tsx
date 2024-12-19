import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year?: string;
  description: string;
}

const educationData: EducationItem[] = [
  {
    degree: 'Bachelor in Mechatronic Engineering',
    institution: 'Universidad Militar Nueva Granada',
    location: 'Colombia',
    description: 'Specialized in robotics, automation, and control systems. Combined mechanical, electronic, and software engineering principles.',
  },
  {
    degree: 'Diploma in Software Development',
    institution: 'Southern Alberta Institute of Technology',
    location: 'Calgary, Canada',
    year: '2024',
    description: 'Focused on web development, including front-end and back-end technologies.'
  }
];

const Education = () => {
  return (
    <Box
      id="education"
      component={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      sx={{
        py: 8,
        background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)',
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
          Education
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {educationData.map((edu, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    backgroundColor: 'rgba(15, 23, 42, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(96, 165, 250, 0.1)',
                    borderRadius: 4,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      backgroundColor: 'rgba(96, 165, 250, 0.1)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <SchoolIcon
                      sx={{
                        fontSize: 40,
                        color: 'primary.main',
                        mr: 2,
                      }}
                    />
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 'bold',
                          color: 'primary.light',
                          mb: 1,
                        }}
                      >
                        {edu.degree}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ color: 'text.primary', mb: 1 }}
                      >
                        {edu.institution}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                      color: 'text.secondary',
                    }}
                  >
                    <LocationOnIcon sx={{ mr: 1 }} />
                    <Typography variant="body1">
                      {edu.location}{edu.year ? ` • ${edu.year}` : ''}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{ color: 'text.secondary', lineHeight: 1.6 }}
                  >
                    {edu.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Education;
