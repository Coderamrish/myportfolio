// src/components/Navbar/Navbar.js
import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Button, IconButton,
  Drawer, List, ListItem, ListItemText, Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';
import { Link as ScrollLink } from 'react-scroll';

const navItems = ['About', 'Education', 'Projects', 'Skills', 'Achievements', 'Blogs', 'Resume', 'Contact'];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          background: scrolled
            ? 'rgba(5,10,24,0.95)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,229,255,0.15)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Toolbar sx={{ maxWidth: 1200, mx: 'auto', width: '100%', px: { xs: 2, md: 4 } }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1 }}>
            <CodeIcon sx={{ color: 'primary.main', fontSize: 28 }} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                background: 'linear-gradient(90deg, #00e5ff, #7c4dff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '1px',
              }}
            >
              AKT
            </Typography>
          </Box>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
            {navItems.map((item) => (
              <ScrollLink
                key={item}
                to={item.toLowerCase()}
                smooth
                duration={600}
                offset={-70}
                style={{ cursor: 'pointer' }}
              >
                <Button
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.85rem',
                    '&:hover': { color: 'primary.main', background: 'rgba(0,229,255,0.08)' },
                  }}
                >
                  {item}
                </Button>
              </ScrollLink>
            ))}
          </Box>

          {/* Mobile menu */}
          <IconButton
            sx={{ display: { md: 'none' }, color: 'primary.main' }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { background: '#0d1a2e', width: 220 } }}>
        <List sx={{ pt: 4 }}>
          {navItems.map((item) => (
            <ListItem key={item} onClick={() => setDrawerOpen(false)} sx={{ cursor: 'pointer' }}>
              <ScrollLink to={item.toLowerCase()} smooth duration={600} offset={-70} style={{ width: '100%' }}>
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{ color: 'text.primary', fontWeight: 500 }}
                />
              </ScrollLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}