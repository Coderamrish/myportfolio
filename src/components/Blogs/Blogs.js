// src/components/Blogs/Blogs.js
import React from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import SectionWrapper from '../SectionWrapper';
import ArticleIcon from '@mui/icons-material/Article';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function Blogs() {
  const blogs = [
    {
      title: 'Blog Title',
      excerpt: 'Brief excerpt of the blog post',
      date: '2024',
      tags: ['tag1', 'tag2'],
      link: '#'
    },
    // Add more blogs here
  ];

  return (
    <SectionWrapper id="blogs">
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, color: '#fff' }}>
          Blogs & Articles
        </Typography>
        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)' }}>
          Thoughts and insights from my journey
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 3,
                  background: 'rgba(13,26,46,0.9)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    border: '1px solid #00e5ff44',
                    boxShadow: '0 20px 60px rgba(0,229,255,0.15)',
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <ArticleIcon sx={{ color: '#00e5ff', mr: 1 }} />
                  <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>
                    {blog.title}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 2, flexGrow: 1 }}>
                  {blog.excerpt}
                </Typography>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', mb: 2 }}>
                  {blog.date}
                </Typography>
                <Button
                  endIcon={<OpenInNewIcon />}
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: '#00e5ff', textTransform: 'none', justifyContent: 'flex-start' }}
                >
                  Read More
                </Button>
              </Paper>
            </Grid>
          ))
        ) : (
          <Box sx={{ textAlign: 'center', width: '100%', py: 5 }}>
            <Typography sx={{ color: 'rgba(255,255,255,0.5)' }}>
              Blog posts coming soon...
            </Typography>
          </Box>
        )}
      </Grid>
    </SectionWrapper>
  );
}

export default Blogs;
