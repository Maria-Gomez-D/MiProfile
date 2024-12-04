import React from 'react';
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

// You can replace these with your actual projects
const projects = [
  {
    title: 'Project 1',
    description: 'Description of your first project. What was it about? What technologies did you use?',
    image: 'https://source.unsplash.com/random/800x600?tech',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'Project 2',
    description: 'Description of your second project. Highlight the key features and your role.',
    image: 'https://source.unsplash.com/random/800x600?code',
    technologies: ['TypeScript', 'Express', 'PostgreSQL'],
    liveLink: '#',
    githubLink: '#',
  },
  // Add more projects as needed
];

const Projects = () => {
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
              <Grid item xs={12} md={6} lg={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card 
                    sx={{ 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column',
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 8,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
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
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
