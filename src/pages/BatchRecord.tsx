import React from 'react';
import {
  Container,
  Typography,
  Box,
  Chip,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Button,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { useNavigate } from 'react-router-dom';

const BatchRecord = () => {
  const navigate = useNavigate();

  const technologies = [
    { category: 'Frontend', description: 'React and Tailwind CSS for a responsive and user-friendly interface' },
    { category: 'Backend', description: 'Next.js API Routes and MongoDB for robust data handling' },
    { category: 'Authentication', description: 'NextAuth.js with secure login, role management, and password reset' },
    { category: 'Testing', description: 'Jest and React Testing Library for reliable functionality and quality assurance' },
    { category: 'Data Validation', description: 'Real-time validation to ensure accuracy and consistency in records' }
  ];
  
  const highlights = [
    { title: 'Predefined Templates', description: 'Ready-to-use templates for manufacturing each type of mask or medical equipment, ensuring consistency and accuracy across all batch records.' },
    { title: 'Role-Based Access Control', description: 'Administrators can create or edit user accounts with specific roles, controlling access to editing, filling, or creating new batch records based on their assigned permissions.' },
    { title: 'Password-Protected Changes', description: 'To ensure data integrity, any changes made in one section must be saved with a password before navigating to another section.' },
    { title: 'Duplication of Specific Sections', description: 'Specific sections of a batch record can be easily duplicated to be filled in differnts shifts.' },
    { title: 'Dynamic Forms Management', description: 'Flexibility to create, edit, and manage forms tailored to the production process, adapting to different product requirements.' },
    { title: 'Completion Indicators', description: 'Once a table is fully completed, it is marked as finished, providing clear visual progress.' },
    { title: 'Secure Logout Process', description: 'Users are required to log out with a comment and password after completing all changes, ensuring accountability and proper session management.' },
    { title: 'Audit Log', description: 'Administrators can view all changes in the system through a comprehensive audit log. Filters allow quick identification of specific modifications, enhancing traceability and compliance.' },
    { title: 'Password Recovery', description: 'AUsers can recover their accounts through a secure password reset process using a link sent to their email.' }
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
                Electronic Batch Record System
              </Typography>
            </Grid>

            {/* Project Image */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3}>
                <Box
                  component="img"
                  src={process.env.PUBLIC_URL + '/proyect-images/Batchrecord.png'}
                  alt="BatchRecord Project"
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
                  This project is a custom web application developed for a medical equipment manufacturing company specializing in oxygen masks and similar medical supplies. The system replaces the traditional paper-based batch records—previously consisting of approximately 18 pages per record, with around 50 records created daily—with an efficient and secure digital solution.
                </Typography>
                <Typography paragraph>
                  The EBR system streamlines production documentation, offering advanced features to enhance usability, security, and compliance.
                </Typography>
                <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                  <Button
                    variant="contained"
                    startIcon={<LaunchIcon />}
                    href="https://batchrecord.vercel.app/login"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    href="https://github.com/Maria-Gomez-D/BatchRecord"
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
                  The EBR system significantly reduces manual effort, minimizes human error, and enhances production traceability and accountability. Developed in collaboration with teammates, this system empowers the company to efficiently manage a high volume of batch records while maintaining compliance with stringent medical industry standards.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                  Note: Some details, such as company names and data, have been modified to maintain confidentiality.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default BatchRecord;
