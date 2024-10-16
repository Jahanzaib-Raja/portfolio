// components/Services.tsx
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const services = [
  { title: 'Branding Design', description: 'Crafting unique brand identities.' },
  { title: 'Web Design', description: 'Designing modern, responsive websites.' },
  { title: 'UI/UX Design', description: 'Enhancing user experience with sleek interfaces.' },
  { title: 'Graphic Design', description: 'Creating eye-catching graphics.' },
];

const Services = () => (
  <Box id="services" sx={{ padding: '4rem 2rem', backgroundColor: '#2c2c2c' }}>
    <Typography variant="h4" sx={{ color: '#fff', marginBottom: '2rem' }} align="center">
      My Quality Services
    </Typography>
    {services.map((service) => (
      <Accordion key={service.title} sx={{ marginBottom: '1rem' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{service.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{service.description}</Typography>
        </AccordionDetails>
      </Accordion>
    ))}
  </Box>
);

export default Services;
