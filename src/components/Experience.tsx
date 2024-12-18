import React from 'react';
import { Box, Typography, Stack, Card } from '@mui/material';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Business Account Manager',
    company: 'Cristales de Seguridad Constructores Ltda',
    period: '2015 - 2022',
    description: 'Experienced in streamlining business processes through software solutions, data automation, and Agile practices, with strong skills in problem-solving, cross-functional collaboration, and optimizing workflows to drive efficiency and innovation.',
  },
  {
    title: 'Business Account Manager',
    company: 'Proyectos Integrales - PIL Automation',
    period: '2012 - 2015',
    description: 'Designed and implemented software solutions to meet client needs, improving efficiency and accuracy through process automation, technical support, data analysis, and strategic decision-making.',
  },
  {
    title: 'Project Engineer',
    company: 'Proyectos Integrales - PIL Automation',
    period: '2011 - 2012',
    description: 'Programmed and optimized PLCs and HMIs using Rockwell Automation tools, applying OOP principles, electrical schematics design, and process automation to enhance efficiency and ensure reliable system performance.',
  }
  // Add more experiences as needed
];

const Experience = () => {
  return (
    <Box
      id="experience"
      sx={{
        minHeight: '100vh',
        py: 8,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{ mb: 6, textAlign: 'center' }}
        >
          Experience
        </Typography>

        <Stack spacing={4} sx={{ maxWidth: 800, mx: 'auto' }}>
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card
                sx={{
                  p: 3,
                  borderRadius: 2,
                  boxShadow: 3,
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: index % 2 === 0 ? -8 : 'auto',
                    right: index % 2 === 0 ? 'auto' : -8,
                    top: '50%',
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    transform: 'translateY(-50%)',
                  },
                }}
              >
                <Typography variant="h6" component="h3">
                  {experience.title}
                </Typography>
                <Typography color="primary" gutterBottom>
                  {experience.company}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {experience.period}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  {experience.description}
                </Typography>
              </Card>
            </motion.div>
          ))}
        </Stack>
      </motion.div>
    </Box>
  );
};

export default Experience;
