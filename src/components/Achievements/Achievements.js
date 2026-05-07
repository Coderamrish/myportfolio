// src/components/Achievements/Achievements.js
import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import SectionWrapper from '../SectionWrapper';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function Achievements() {
  const achievements = [
    {
      title: 'Achievement Title',
      description: 'Achievement description goes here',
      date: '2024',
      tags: ['tag1', 'tag2']
    },
    // Add more achievements here
  ];

  return (
    <SectionWrapper id="achievements">
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, color: '#fff' }}>
          Achievements
        </Typography>
        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)' }}>
          Recognitions and awards
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {achievements.length > 0 ? (
          achievements.map((achievement, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 3,
                  background: 'rgba(13,26,46,0.9)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  p: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    border: '1px solid #00e5ff44',
                    boxShadow: '0 20px 60px rgba(0,229,255,0.15)',
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EmojiEventsIcon sx={{ color: '#00e5ff', mr: 1, fontSize: 28 }} />
                  <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>
                    {achievement.title}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 2 }}>
                  {achievement.description}
                </Typography>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                  {achievement.date}
                </Typography>
              </Paper>
            </Grid>
          ))
        ) : (
          <Box sx={{ textAlign: 'center', width: '100%', py: 5 }}>
            <Typography sx={{ color: 'rgba(255,255,255,0.5)' }}>
              Achievements coming soon...
            </Typography>
          </Box>
        )}
      </Grid>
    </SectionWrapper>
  );
}

export default Achievements;
