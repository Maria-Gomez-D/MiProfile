import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Box,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
  {
    title: 'Electronic Batch Record System',
    description: 'A modern web application for managing and tracking production batch records digitally, replacing traditional manual processes. It ensures a full change log, showing who made modifications, and requires a password to save any changes.',
    image: process.env.PUBLIC_URL + '/proyect-images/Batchrecord.png',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'NextAuth.js', 'Tailwind Css', 'Jest'],
    liveLink: 'https://batchrecord.vercel.app/login',
    githubLink: 'https://github.com/Maria-Gomez-D/BatchRecord',
  },
  {
    title: 'E-commerce platform',
    description: 'CarnivalStore is an online store designed to offer a seamless shopping experience for personalized party supplies. Its modern, responsive design showcases products by categories and themed collections, with features like an interactive cart and custom order options to make planning celebrations effortless.',
    image: process.env.PUBLIC_URL + '/proyect-images/CarnivalStore.png',
    technologies: ['React.js', 'Vite', 'Tailwind CSS', 'Firebase'],
    liveLink: 'https://carnival-store.vercel.app',
    githubLink: 'https://github.com/Maria-Gomez-D/CarnivalStore',
  },
  // Add more projects as needed
];

const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (index: number) => {
    if (index === 0) {
      navigate('/batchrecord');
    }
    if (index === 1) {
      navigate('/carnivalstore');
    }
  };

  return (
    <Box
      id="projects"
      sx={{
        minHeight: '100vh',
        py: 8,
        backgroundColor: 'background.default',
      }}
    >
      <Container>
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
            Projects
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  component={motion.div}
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.2 },
                  }}
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
                  onClick={() => handleProjectClick(index)}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      height: 250,
                      objectFit: 'contain',
                      backgroundColor: 'background.paper',
                      p: 1
                    }}
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h3">
                      {project.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {project.description}
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.technologies.map((tech) => (
                        <Typography
                          key={tech}
                          variant="body2"
                          sx={{
                            bgcolor: 'primary.main',
                            color: 'white',
                            px: 1,
                            py: 0.5,
                            borderRadius: 1,
                            fontSize: '0.75rem',
                          }}
                        >
                          {tech}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button 
                      size="small" 
                      href={project.liveLink} 
                      target="_blank"
                      startIcon={<LaunchIcon />}
                    >
                      Live Demo
                    </Button>
                    <Button 
                      size="small" 
                      href={project.githubLink} 
                      target="_blank"
                      startIcon={<GitHubIcon />}
                    >
                      GitHub
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
