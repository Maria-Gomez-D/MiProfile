import React from 'react';
import { Box, Typography, Avatar, Container, IconButton, Paper } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';

const Profile = () => {
  return (
    <Box
      id="profile"
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #1E293B 0%, #0F172A 100%)',
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: 4,
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(96, 165, 250, 0.1)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Avatar
              src="/path-to-your-photo.jpg"
              alt="Profile"
              sx={{
                width: 200,
                height: 200,
                border: 4,
                borderColor: 'primary.main',
                boxShadow: '0 0 20px rgba(96, 165, 250, 0.3)',
              }}
            />
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h2"
                component={motion.h2}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                sx={{
                  mb: 2,
                  background: 'linear-gradient(45deg, #60A5FA, #93C5FD)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  fontWeight: 'bold',
                }}
              >
                Maria Gomez
              </Typography>
              <Typography
                variant="h4"
                component={motion.h4}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                sx={{ mb: 2, color: 'primary.light' }}
              >
                Software Developer
              </Typography>
              <Typography
                variant="body1"
                component={motion.p}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                sx={{ mb: 3, color: 'text.secondary' }}
              >
                Passionate about creating beautiful and intuitive user interfaces.
                Specialized in React and modern web technologies.
              </Typography>
              <Box
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                sx={{
                  display: 'flex',
                  gap: 2,
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}
              >
                <IconButton
                  href="https://github.com/Maria-Gomez-D"
                  target="_blank"
                  sx={{
                    color: 'primary.main',
                    '&:hover': {
                      color: 'primary.light',
                      transform: 'translateY(-3px)',
                      transition: 'all 0.3s',
                    },
                  }}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/in/maria-godi/"
                  target="_blank"
                  sx={{
                    color: 'primary.main',
                    '&:hover': {
                      color: 'primary.light',
                      transform: 'translateY(-3px)',
                      transition: 'all 0.3s',
                    },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  href="mailto:gomez.mafe@gmail.com"
                  sx={{
                    color: 'primary.main',
                    '&:hover': {
                      color: 'primary.light',
                      transform: 'translateY(-3px)',
                      transition: 'all 0.3s',
                    },
                  }}
                >
                  <EmailIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Profile;
