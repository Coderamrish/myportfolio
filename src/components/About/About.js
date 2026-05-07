// src/components/About/About.js
import React from 'react';
import { Box, Typography, Grid, Paper, Avatar } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SectionWrapper from '../SectionWrapper';
import { personalInfo } from '../../data/portfolioData';

const highlights = [
  { icon: <CodeIcon />, title: 'Full Stack Dev', desc: 'React, Node.js, FastAPI — end to end from UI to infra.' },
  { icon: <SmartToyIcon />, title: 'AI / ML Engineer', desc: 'RAG pipelines, LLMs, CNN models, and MCP architectures.' },
  { icon: <EmojiEventsIcon />, title: 'Competitive Coder', desc: '800+ problems solved. LeetCode Knight. Global ranks.' },
];

export default function About() {
  return (
    <SectionWrapper id="about" title="About Me" subtitle="WHO I AM">
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={5}>
          <Box sx={{ position: 'relative', textAlign: 'center' }}>
            <Avatar
              sx={{
                width: 220, height: 220, mx: 'auto',
                background: 'linear-gradient(135deg, #00e5ff22, #7c4dff44)',
                border: '2px solid rgba(0,229,255,0.3)',
                fontSize: '4rem',
                boxShadow: '0 0 60px rgba(0,229,255,0.2)',
              }}
            >
              AK
            </Avatar>
            {/* Decorative ring */}
            <Box sx={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%,-50%)',
              width: 260, height: 260,
              border: '1px dashed rgba(0,229,255,0.2)',
              borderRadius: '50%',
              animation: 'spin 20s linear infinite',
              '@keyframes spin': { '0%': { transform: 'translate(-50%,-50%) rotate(0deg)' }, '100%': { transform: 'translate(-50%,-50%) rotate(360deg)' } },
            }} />
          </Box>
        </Grid>

        <Grid item xs={12} md={7}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main', mb: 2 }}>
            Hi, I'm Amrish 👋
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.9, mb: 3 }}>
            {personalInfo.bio}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
            Currently in my 2nd year of B.Tech at <strong style={{ color: '#00e5ff' }}>Narula Institute of Technology</strong>, 
            I'm deeply passionate about AI-powered distributed systems, real-time data processing, and building solutions 
            that create real-world impact — especially in agriculture and maritime intelligence.
          </Typography>
        </Grid>
      </Grid>

      {/* Highlight cards */}
      <Grid container spacing={3} sx={{ mt: 6 }}>
        {highlights.map((h, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Paper
              elevation={0}
              sx={{
                p: 3, borderRadius: 3, textAlign: 'center',
                background: 'rgba(13,26,46,0.8)',
                border: '1px solid rgba(0,229,255,0.1)',
                '&:hover': {
                  border: '1px solid rgba(0,229,255,0.4)',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(0,229,255,0.1)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Box sx={{ color: 'primary.main', mb: 1.5 }}>{h.icon}</Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{h.title}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>{h.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}