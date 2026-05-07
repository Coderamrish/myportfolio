// src/components/Hero/Hero.js
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { personalInfo } from '../../data/portfolioData';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #050a18 0%, #0a0f2e 50%, #050a18 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', py: 8 }}>
          {/* Animated greeting */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h4"
              sx={{
                color: '#00e5ff',
                fontWeight: 600,
                mb: 2,
                letterSpacing: '2px',
              }}
            >
              Hi there! 👋
            </Typography>
          </motion.div>

          {/* Main heading with animation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2.5rem', md: '4rem' },
                mb: 3,
                background: 'linear-gradient(135deg, #e8eaf6 60%, #00e5ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1.2,
              }}
            >
              I'm {personalInfo.name.split(' ')[0]}
            </Typography>
          </motion.div>

          {/* Typewriter animation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Box sx={{ mb: 4, minHeight: '60px' }}>
              <Typography
                variant="h5"
                sx={{
                  color: 'rgba(255,255,255,0.8)',
                  fontWeight: 500,
                }}
              >
                {personalInfo.taglines[0]}
              </Typography>
            </Box>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '1.1rem',
                maxWidth: '600px',
                mx: 'auto',
                mb: 6,
                lineHeight: 1.8,
              }}
            >
              {personalInfo.bio}
            </Typography>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <ScrollLink to="projects" smooth duration={600} offset={-70}>
              <Button
                variant="contained"
                sx={{
                  background: 'linear-gradient(135deg, #00e5ff, #0099cc)',
                  color: '#000',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  fontSize: '1rem',
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 15px 40px rgba(0,229,255,0.3)',
                  },
                }}
              >
                View My Work
              </Button>
            </ScrollLink>

            <ScrollLink to="contact" smooth duration={600} offset={-70}>
              <Button
                variant="outlined"
                sx={{
                  color: '#00e5ff',
                  borderColor: '#00e5ff',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  fontSize: '1rem',
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#ffffff',
                    color: '#ffffff',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                Get In Touch
              </Button>
            </ScrollLink>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 2, delay: 0.8, repeat: Infinity }}
            style={{ marginTop: '80px' }}
          >
            <Typography sx={{ color: 'rgba(0,229,255,0.6)', fontSize: '0.9rem' }}>
              ↓ Scroll to explore
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}