// src/components/Projects/Projects.js
import React, { useState } from 'react';
import {
  Box, Typography, Grid, Paper, Chip, Button,
  IconButton, Collapse, List, ListItem, ListItemIcon, ListItemText
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SectionWrapper from '../SectionWrapper';
import { projects } from '../../data/portfolioData';

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 3,
        background: 'rgba(13,26,46,0.9)',
        border: '1px solid rgba(255,255,255,0.07)',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        '&:hover': {
          border: `1px solid ${project.color}44`,
          transform: 'translateY(-6px)',
          boxShadow: `0 20px 60px ${project.color}15`,
        },
      }}
    >
      {/* Color bar */}
      <Box sx={{ height: 4, background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

      <Box sx={{ p: 3 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
          <Box>
            <Typography variant="overline" sx={{ color: project.color, fontWeight: 700, fontSize: '0.7rem', letterSpacing: 2 }}>
              {project.subtitle}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>
              {project.title}
            </Typography>
          </Box>
          <Box>
            <IconButton size="small" href={project.github} target="_blank" sx={{ color: 'text.secondary', '&:hover': { color: '#fff' } }}>
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" href={project.live} target="_blank" sx={{ color: 'text.secondary', '&:hover': { color: project.color } }}>
              <OpenInNewIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        {/* Description */}
        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 2 }}>
          {project.description}
        </Typography>

        {/* Tech chips */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: 2 }}>
          {project.tech.map((t) => (
            <Chip
              key={t} label={t} size="small"
              sx={{
                background: `${project.color}12`,
                color: project.color,
                border: `1px solid ${project.color}33`,
                fontSize: '0.7rem',
              }}
            />
          ))}
        </Box>

        {/* Expand button */}
        <Button
          size="small"
          endIcon={<ExpandMoreIcon sx={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />}
          onClick={() => setExpanded(!expanded)}
          sx={{ color: 'text.secondary', fontSize: '0.75rem' }}
        >
          {expanded ? 'Hide' : 'Key Highlights'}
        </Button>

        <Collapse in={expanded}>
          <List dense sx={{ mt: 1 }}>
            {project.highlights.map((h, i) => (
              <ListItem key={i} disableGutters sx={{ py: 0.3 }}>
                <ListItemIcon sx={{ minWidth: 28 }}>
                  <CheckCircleIcon sx={{ fontSize: 16, color: project.color }} />
                </ListItemIcon>
                <ListItemText
                  primary={h}
                  primaryTypographyProps={{ variant: 'body2', color: 'text.secondary', fontSize: '0.8rem' }}
                />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </Box>
    </Paper>
  );
}

export default function Projects() {
  return (
    <SectionWrapper id="projects" title="Projects" subtitle="WHAT I'VE BUILT">
      <Grid container spacing={3}>
        {projects.map((p) => (
          <Grid item xs={12} md={4} key={p.id}>
            <ProjectCard project={p} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Button
          variant="outlined"
          href="https://github.com/Coderamrish"
          target="_blank"
          startIcon={<GitHubIcon />}
          sx={{
            borderColor: 'primary.main',
            color: 'primary.main',
            px: 4, py: 1.2,
            borderRadius: '50px',
            '&:hover': { background: 'rgba(0,229,255,0.08)' },
          }}
        >
          View More on GitHub
        </Button>
      </Box>
    </SectionWrapper>
  );
}