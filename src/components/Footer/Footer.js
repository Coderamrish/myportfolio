// src/components/Footer/Footer.js
import React from 'react';
import { Box, Typography, Container, Divider, IconButton, Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { personalInfo } from '../../data/portfolioData';

function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: GitHubIcon, href: personalInfo.github, label: 'GitHub' },
    { icon: LinkedInIcon, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: InstagramIcon, href: personalInfo.instagram, label: 'Instagram' },
    { icon: EmailIcon, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <Box sx={{ background: 'rgba(5,10,24,0.8)', borderTop: '1px solid rgba(255,255,255,0.1)', mt: 8 }}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ color: '#00e5ff', fontWeight: 'bold', mb: 2 }}>
              {personalInfo.name}
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: 1.6 }}>
              {personalInfo.bio.substring(0, 100)}...
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold', mb: 2 }}>
              Quick Links
            </Typography>
            {footerLinks.map((link, index) => (
              <Typography
                key={index}
                component="a"
                href={link.href}
                sx={{
                  display: 'block',
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  mb: 1,
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#00e5ff' }
                }}
              >
                {link.label}
              </Typography>
            ))}
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold', mb: 2 }}>
              Contact
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', mb: 1 }}>
              {personalInfo.location}
            </Typography>
            <Typography
              component="a"
              href={`mailto:${personalInfo.email}`}
              sx={{
                display: 'block',
                color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'color 0.3s ease',
                '&:hover': { color: '#00e5ff' }
              }}
            >
              {personalInfo.email}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold', mb: 2 }}>
              Follow Me
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <IconButton
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'rgba(255,255,255,0.6)',
                      transition: 'color 0.3s ease',
                      '&:hover': { color: '#00e5ff' }
                    }}
                    title={social.label}
                  >
                    <Icon />
                  </IconButton>
                );
              })}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 3 }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', mt: 1 }}>
            Designed & Built with ❤️
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
