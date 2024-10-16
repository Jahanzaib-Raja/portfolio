// components/Hero.tsx
import { Box, Typography, Button, Stack } from '@mui/material';
import Image from 'next/image';

const Hero = () => (
  <Box
    id="home"
    sx={{
      textAlign: 'center',
      padding: '5rem 2rem',
      backgroundColor: '#1f1f1f',
    }}
  >
    <Image
      src="/images/profile.jpg"
      alt="Raja Jahanzaib"
      width={180}
      height={180}
      style={{ borderRadius: '50%' }}
    />
    <Typography variant="h2" sx={{ color: '#fff', marginTop: '1rem' }}>
      I am Raja Jahanzaib Ashfaq
    </Typography>
    <Typography variant="h6" sx={{ color: '#8c4dff', marginBottom: '2rem' }}>
      Fullstack Engineer | Problem Solver | Passionate Developer
    </Typography>
    <Stack direction="row" spacing={2} justifyContent="center">
      <Button variant="contained" color="primary">
        Download CV
      </Button>
      <Button variant="outlined" color="secondary">
        Contact Me
      </Button>
    </Stack>
  </Box>
);

export default Hero;
