// components/Contact.tsx
import { Box, TextField, Button, Typography } from '@mui/material';

const Contact = () => (
  <Box id="contact" sx={{ padding: '4rem 2rem', textAlign: 'center' }}>
    <Typography variant="h4" color="primary" gutterBottom>
      Get in Touch
    </Typography>
    <form action="/api/contact" method="POST">
      <TextField
        label="Name"
        name="name"
        fullWidth
        sx={{ marginBottom: '1rem' }}
        required
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        fullWidth
        sx={{ marginBottom: '1rem' }}
        required
      />
      <TextField
        label="Message"
        name="message"
        multiline
        rows={4}
        fullWidth
        sx={{ marginBottom: '1rem' }}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Send Message
      </Button>
    </form>
  </Box>
);

export default Contact;
