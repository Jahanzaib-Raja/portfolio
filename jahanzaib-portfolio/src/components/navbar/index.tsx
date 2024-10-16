// components/Navbar.tsx
'use client';

import { AppBar, Toolbar, Button, Box } from '@mui/material';

const Navbar = () => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#1f1f1f' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box component="img" src="/logo.png" alt="Logo" sx={{ height: 40 }} />
        <Box>
          {['home', 'services', 'contact'].map((section) => (
            <Button
              key={section}
              color="inherit"
              onClick={() => handleScroll(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
