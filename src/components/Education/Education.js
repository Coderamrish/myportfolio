// src/components/Education/Education.js
import React from 'react';
import { Box, Typography, Paper, Chip, Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GradeIcon from '@mui/icons-material/Grade';
import SectionWrapper from '../SectionWrapper';
import { education } from '../../data/portfolioData';

export default function Education() {
  return (
    <SectionWrapper id="education" title="Education" subtitle="MY BACKGROUND" dark>
      <Grid container justifyContent="center">
        {education.map((edu, i) => (
          <Grid item xs={12} md={8} key={i}>
            <Paper
              elevation={0}
              sx={{
                p: 4, borderRadius: 3,
                background: 'rgba(13,26,46,0.9)',
                border: '1px solid rgba(0,229,255,0.2)',
                boxShadow: '0 8px 40px rgba(0,229,255,0.08)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0, left: 0,
                  width: '4px',
                  height: '100%',
                  background: 'linear-gradient(180deg, #00e5ff, #7c4dff)',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <Box
                  sx={{
                    p: 1.5, borderRadius: 2,
                    background: 'rgba(0,229,255,0.1)',
                    color: 'primary.main',
                    display: 'flex',
                  }}
                >
                  <SchoolIcon sx={{ fontSize: 32 }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary', mb: 0.5 }}>
                    {edu.institution}
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 600, mb: 2, fontSize: '1rem' }}>
                    {edu.degree}
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                      <CalendarTodayIcon sx={{ fontSize: 16 }} />
                      <Typography variant="body2">{edu.duration}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                      <LocationOnIcon sx={{ fontSize: 16 }} />
                      <Typography variant="body2">{edu.location}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <GradeIcon sx={{ fontSize: 16, color: '#ffd740' }} />
                      <Chip
                        label={`GPA: ${edu.gpa}`}
                        size="small"
                        sx={{
                          background: 'rgba(255,215,64,0.12)',
                          color: '#ffd740',
                          fontWeight: 700,
                          border: '1px solid rgba(255,215,64,0.3)',
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}