// src/components/SectionWrapper.js
import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

export default function SectionWrapper({ id, title, subtitle, children, dark }) {
  return (
    <Box
      id={id}
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 6 },
        background: dark ? 'rgba(13,26,46,0.5)' : 'transparent',
        position: 'relative',
      }}
    >
      <Box sx={{ maxWidth: 1100, mx: 'auto' }}>
        {/* Section heading */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 4, fontSize: '0.75rem' }}
          >
            {subtitle}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mt: 0.5,
              background: 'linear-gradient(135deg, #e8eaf6 60%, #00e5ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {title}
          </Typography>
          <Divider
            sx={{
              width: 60,
              mx: 'auto',
              mt: 2,
              borderColor: 'primary.main',
              borderWidth: 2,
              borderRadius: 2,
            }}
          />
        </Box>
        {children}
      </Box>
    </Box>
  );
}