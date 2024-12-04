import React from 'react';
import { Box, Typography, Container, Paper, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <Box
      id="contact"
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
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            p: 6,
            borderRadius: 4,
            backgroundColor: 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(96, 165, 250, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          }}
        >
          <Typography
            variant="h2"
            component={motion.h2}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            sx={{
              mb: 4,
              textAlign: 'center',
              background: 'linear-gradient(45deg, #60A5FA, #93C5FD)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              fontWeight: 'bold',
            }}
          >
            Get in Touch
          </Typography>

          <Typography
            variant="h6"
            component={motion.p}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            sx={{
              mb: 4,
              textAlign: 'center',
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            I'm always open to new opportunities and collaborations.
            Feel free to reach out through any of these platforms!
          </Typography>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 3,
              mt: 4,
            }}
          >
            <IconButton
              href="mailto:gomez.mafe@gmail.com"
              sx={{
                color: 'primary.main',
                p: 2,
                backgroundColor: 'rgba(96, 165, 250, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(96, 165, 250, 0.2)',
                  transform: 'translateY(-5px)',
                  transition: 'all 0.3s',
                },
              }}
            >
              <EmailIcon sx={{ fontSize: 30 }} />
            </IconButton>

            <IconButton
              href="https://www.linkedin.com/in/maria-godi/"
              target="_blank"
              sx={{
                color: 'primary.main',
                p: 2,
                backgroundColor: 'rgba(96, 165, 250, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(96, 165, 250, 0.2)',
                  transform: 'translateY(-5px)',
                  transition: 'all 0.3s',
                },
              }}
            >
              <LinkedInIcon sx={{ fontSize: 30 }} />
            </IconButton>

            <IconButton
              href="https://github.com/Maria-Gomez-D"
              target="_blank"
              sx={{
                color: 'primary.main',
                p: 2,
                backgroundColor: 'rgba(96, 165, 250, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(96, 165, 250, 0.2)',
                  transform: 'translateY(-5px)',
                  transition: 'all 0.3s',
                },
              }}
            >
              <GitHubIcon sx={{ fontSize: 30 }} />
            </IconButton>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;
