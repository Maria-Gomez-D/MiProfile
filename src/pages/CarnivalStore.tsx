import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { useNavigate } from 'react-router-dom';

const CarnivalStore = () => {
  const navigate = useNavigate();

  const technologies = [
    { 
      category: 'React.js', 
      description: 'Main frontend framework with component-based architecture for reusable UI elements and React Router for seamless navigation'
    },
    { 
      category: 'Vite', 
      description: 'Build tool and development server providing fast refresh and optimized production builds'
    },
    { 
      category: 'Tailwind CSS', 
      description: 'Responsive design implementation with custom color schemes, typography, and component styling and animations'
    },
    { 
      category: 'Firebase', 
      description: 'User authentication, data storage and management, and real-time updates'
    },
    { 
      category: 'Additional Libraries', 
      description: 'React Slick for image carousels, React Icons for iconography, and React Router DOM for client-side routing'
    }
  ];
  
  const highlights = [
    { 
      title: 'Dynamic Product Catalog', 
      description: 'Interactive display of products organized by categories (cake toppers, banners, letters, favors)'
    },
    { 
      title: 'Custom Collections', 
      description: 'Themed collections featuring popular franchises like Cars, Barbie, and Disney'
    },
    { 
      title: 'User Authentication', 
      description: 'Secure login and registration system using Firebase'
    },
    { 
      title: 'Responsive Design', 
      description: 'Fully adaptive layout that works seamlessly across desktop and mobile devices'
    },
    { 
      title: 'Image Carousel', 
      description: 'Interactive banner slider showcasing featured products and promotions'
    },
    { 
      title: 'Shopping Cart', 
      description: 'Real-time cart management system'
    },
    { 
      title: 'Made-to-Order Section', 
      description: 'Custom ordering system for personalized party supplies'
    },
    { 
      title: 'Newsletter Subscription', 
      description: 'Email subscription feature for marketing updates'
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', py: 4, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/')}
            sx={{ mb: 4 }}
          >
            Back to Projects
          </Button>

          <Grid container spacing={4}>
            {/* Project Title */}
            <Grid item xs={12}>
              <Typography variant="h3" component="h1" gutterBottom>
                CarnivalStore E-commerce Platform
              </Typography>
            </Grid>

            {/* Project Image */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3}>
                <Box
                  component="img"
                  src={process.env.PUBLIC_URL + '/proyect-images/CarnivalStore.png'}
                  alt="CarnivalStore Project"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '4px',
                  }}
                />
              </Paper>
            </Grid>

            {/* Project Description */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Typography variant="h5" gutterBottom>
                  Overview
                </Typography>
                <Typography paragraph>
                  CarnivalStore is an e-commerce platform specialized in party supplies and decorations. The website offers a modern, user-friendly interface for browsing and purchasing custom party decorations, including cake toppers, banners, and party favors. This project showcases a fully responsive design with an emphasis on visual appeal and user experience, perfect for customers planning special events and celebrations.
                </Typography>
                <Typography paragraph>
                  The platform features a modern, user-friendly interface with seamless navigation, advanced search capabilities, and a robust shopping cart system to enhance the customer experience.
                </Typography>
                <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                  <Button
                    variant="contained"
                    startIcon={<LaunchIcon />}
                    href="https://carnival-store.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    href="https://github.com/Maria-Gomez-D/CarnivalStore"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </Button>
                </Box>
              </Paper>
            </Grid>

            {/* Key Features */}
            <Grid item xs={12}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                  Key Features
                </Typography>
                <List>
                  {highlights.map((highlight, index) => (
                    <ListItem key={index}>
                      <ListItemText
                        primary={
                          <Typography variant="subtitle1" component="span">
                            <Box component="span" sx={{ fontWeight: 'bold' }}>
                              {highlight.title}:
                            </Box>
                            {' ' + highlight.description}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>

            {/* Technologies Used */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Typography variant="h5" gutterBottom>
                  Technologies Used
                </Typography>
                <List>
                  {technologies.map((tech, index) => (
                    <ListItem key={index}>
                      <ListItemText
                        primary={
                          <Typography variant="subtitle1" component="span" sx={{ fontWeight: 'bold' }}>
                            {tech.category}:
                          </Typography>
                        }
                        secondary={tech.description}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>

            {/* Impact Section */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Typography variant="h5" gutterBottom>
                  Impact
                </Typography>
                <Typography paragraph>
                  Business Efficiency: Streamlines the process of showcasing and selling party supplies through a digital platform. The platform provides an intuitive and enjoyable shopping experience with easy navigation and clear product categorization, enabling the business to reach a broader audience through an online presence.
                </Typography>
                <Typography paragraph>
                  Customer Engagement: Facilitates direct interaction with customers through features like the newsletter and custom order options. The platform strengthens brand presence with a cohesive design and professional online storefront, built with modern technologies that allow for easy expansion and feature additions.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CarnivalStore;
