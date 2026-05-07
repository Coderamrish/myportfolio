// src/components/Skills/Skills.js
import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, Chip, Tab, Tabs } from '@mui/material';
import SectionWrapper from '../SectionWrapper';
import { skills } from '../../data/portfolioData';

const categoryColors = {
  'Programming Languages': '#00e5ff',
  'Frameworks & Libraries': '#7c4dff',
  'AI / ML': '#ff6d00',
  'Databases & Caching': '#00e676',
  'Tools & Platforms': '#ffd740',
  'CS Fundamentals': '#f48fb1',
};

export default function Skills() {
  const categories = Object.keys(skills);
  const [active, setActive] = useState(0);

  return (
    <SectionWrapper id="skills" title="Tech Stack & Tools" subtitle="WHAT I KNOW" dark>
      {/* Tab bar */}
      <Tabs
        value={active}
        onChange={(_, v) => setActive(v)}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          mb: 5,
          '& .MuiTab-root': { color: 'text.secondary', textTransform: 'none', fontWeight: 500 },
          '& .Mui-selected': { color: 'primary.main !important' },
          '& .MuiTabs-indicator': { background: 'primary.main' },
        }}
      >
        {categories.map((cat, i) => (
          <Tab key={cat} label={cat} value={i} />
        ))}
      </Tabs>

      {/* Chips */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center', minHeight: 120 }}>
        {skills[categories[active]].map((skill) => (
          <Chip
            key={skill}
            label={skill}
            sx={{
              px: 1,
              py: 2.5,
              fontSize: '0.95rem',
              fontWeight: 600,
              background: `${categoryColors[categories[active]]}14`,
              color: categoryColors[categories[active]],
              border: `1px solid ${categoryColors[categories[active]]}33`,
              borderRadius: '50px',
              transition: 'all 0.2s ease',
              '&:hover': {
                background: `${categoryColors[categories[active]]}28`,
                transform: 'scale(1.05)',
              },
            }}
          />
        ))}
      </Box>

      {/* All skills overview grid */}
      <Grid container spacing={3} sx={{ mt: 6 }}>
        {categories.map((cat) => (
          <Grid item xs={12} sm={6} md={4} key={cat}>
            <Paper
              elevation={0}
              sx={{
                p: 2.5, borderRadius: 3,
                background: 'rgba(5,10,24,0.6)',
                border: `1px solid ${categoryColors[cat]}22`,
                '&:hover': { border: `1px solid ${categoryColors[cat]}55` },
                transition: 'all 0.3s ease',
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{ color: categoryColors[cat], fontWeight: 700, mb: 1.5, letterSpacing: 1, fontSize: '0.75rem' }}
              >
                {cat.toUpperCase()}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                {skills[cat].map((s) => (
                  <Chip
                    key={s} label={s} size="small"
                    sx={{
                      background: `${categoryColors[cat]}10`,
                      color: 'text.secondary',
                      fontSize: '0.72rem',
                    }}
                  />
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}