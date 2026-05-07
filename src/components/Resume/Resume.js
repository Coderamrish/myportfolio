// src/components/Resume/Resume.js
import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import SectionWrapper from '../SectionWrapper';
import GetAppIcon from '@mui/icons-material/GetApp';
import { personalInfo } from '../../data/portfolioData';

function Resume() {
  return (
    <SectionWrapper id="resume">
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, color: '#fff' }}>
          Resume
        </Typography>
        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)' }}>
          Download my resume to learn more about my experience and skills
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Paper
          elevation={0}
          sx={{
            borderRadius: 3,
            background: 'rgba(13,26,46,0.9)',
            border: '1px solid rgba(255,255,255,0.07)',
            p: 6,
            textAlign: 'center',
            maxWidth: 500,
            transition: 'all 0.3s ease',
            '&:hover': {
              border: '1px solid #00e5ff44',
              boxShadow: '0 20px 60px rgba(0,229,255,0.15)',
            }
          }}
        >
          <Typography variant="h5" sx={{ color: '#fff', mb: 3, fontWeight: 'bold' }}>
            Download My Resume
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 4 }}>
            Get a comprehensive overview of my professional experience, skills, and projects
          </Typography>
          <Button
            variant="contained"
            startIcon={<GetAppIcon />}
            href={personalInfo.resumePdf}
            download
            sx={{
              background: 'linear-gradient(135deg, #00e5ff, #0099cc)',
              color: '#000',
              fontWeight: 'bold',
              textTransform: 'none',
              fontSize: '16px',
              px: 4,
              py: 1.5,
              borderRadius: 2,
            }}
          >
            Download Resume
          </Button>
        </Paper>
      </Box>
    </SectionWrapper>
  );
}

export default Resume;
