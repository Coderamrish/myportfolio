// src/components/Contact/Contact.js
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, Grid, IconButton } from '@mui/material';
import SectionWrapper from '../SectionWrapper';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { personalInfo } from '../../data/portfolioData';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactMethods = [
    { icon: EmailIcon, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: PhoneIcon, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: LocationOnIcon, label: 'Location', value: personalInfo.location, href: '#' },
  ];

  return (
    <SectionWrapper id="contact">
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, color: '#fff' }}>
          Get In Touch
        </Typography>
        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)' }}>
          Feel free to reach out for collaborations or just a friendly hello
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              borderRadius: 3,
              background: 'rgba(13,26,46,0.9)',
              border: '1px solid rgba(255,255,255,0.07)',
              p: 4,
            }}
          >
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                sx={{
                  mb: 2,
                  '& .MuiInputBase-input': { color: '#fff' },
                  '& .MuiInputBase-input::placeholder': { color: 'rgba(255,255,255,0.5)' },
                }}
                InputProps={{
                  sx: {
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 1,
                    '&:hover': { borderColor: 'rgba(255,255,255,0.2)' },
                  }
                }}
              />
              <TextField
                fullWidth
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                sx={{
                  mb: 2,
                  '& .MuiInputBase-input': { color: '#fff' },
                  '& .MuiInputBase-input::placeholder': { color: 'rgba(255,255,255,0.5)' },
                }}
                InputProps={{
                  sx: {
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 1,
                    '&:hover': { borderColor: 'rgba(255,255,255,0.2)' },
                  }
                }}
              />
              <TextField
                fullWidth
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={5}
                required
                sx={{
                  mb: 2,
                  '& .MuiInputBase-input': { color: '#fff' },
                  '& .MuiInputBase-input::placeholder': { color: 'rgba(255,255,255,0.5)' },
                }}
                InputProps={{
                  sx: {
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 1,
                    '&:hover': { borderColor: 'rgba(255,255,255,0.2)' },
                  }
                }}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  background: 'linear-gradient(135deg, #00e5ff, #0099cc)',
                  color: '#000',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  fontSize: '16px',
                  py: 1.5,
                  borderRadius: 2,
                }}
              >
                Send Message
              </Button>
            </form>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Paper
                  key={index}
                  elevation={0}
                  sx={{
                    borderRadius: 3,
                    background: 'rgba(13,26,46,0.9)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    p: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      border: '1px solid #00e5ff44',
                      transform: 'translateX(8px)',
                    }
                  }}
                >
                  <Icon sx={{ color: '#00e5ff', fontSize: 32 }} />
                  <Box>
                    <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
                      {method.label}
                    </Typography>
                    <Typography sx={{ color: '#fff', fontWeight: 'bold' }}>
                      {method.value}
                    </Typography>
                  </Box>
                </Paper>
              );
            })}

            <Box sx={{ display: 'flex', gap: 2, mt: 4, justifyContent: 'center' }}>
              <IconButton
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: '#00e5ff' }}
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
              <IconButton
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: '#00e5ff' }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}

export default Contact;
