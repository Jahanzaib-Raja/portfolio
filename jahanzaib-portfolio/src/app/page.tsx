"use client";

import { useTheme } from "./context/themeContext";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Box,
  Button,
  Grid,
  Typography,
  TextField,
  Paper,
  Grid2,
} from "@mui/material";

export default function HomePage() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <Box
      sx={{ padding: "2rem", backgroundColor: darkMode ? "#333" : "#f5f5f5" }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" color="primary">
          Raja Jahanzaib Ashfaq
        </Typography>
        <Button variant="contained" onClick={toggleDarkMode}>
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </Button>
      </header>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ marginTop: "3rem", textAlign: "center" }}
      >
        <Image
          src="/images/profile.jpg"
          alt="Raja Jahanzaib Ashfaq"
          width={200}
          height={200}
          style={{ borderRadius: "50%", marginBottom: "1rem" }}
        />
        <Typography variant="h2">Hi, I'm Raja Jahanzaib Ashfaq</Typography>
        <Typography variant="h6" sx={{ color: "gray" }}>
          Problem solver, technically strong, and passionate about building
          great things.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{ marginTop: "1rem" }}
        >
          See My Work
        </Button>
      </motion.div>

      {/* Projects Section */}
      <Box sx={{ marginTop: "4rem" }}>
        <Typography variant="h4" color="primary">
          My Projects
        </Typography>
        <Grid2 container spacing={3} sx={{ marginTop: "1rem" }}>
          {[1, 2, 3].map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Paper
                  elevation={4}
                  sx={{
                    padding: "1.5rem",
                    background:
                      "linear-gradient(135deg, #8c4dff 30%, #2196f3 90%)",
                    color: "#fff",
                    borderRadius: "8px",
                  }}
                >
                  <Typography variant="h6">Project {project}</Typography>
                  <Typography>
                    A description of the project goes here.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid2>
      </Box>

      {/* Contact Form */}
      <Box
        component="form"
        action="/api/contact"
        method="POST"
        sx={{ marginTop: "4rem", textAlign: "center" }}
      >
        <Typography variant="h4" color="primary">
          Contact Me
        </Typography>
        <TextField
          label="Name"
          name="name"
          fullWidth
          sx={{ marginBottom: "1rem" }}
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          sx={{ marginBottom: "1rem" }}
          required
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          fullWidth
          sx={{ marginBottom: "1rem" }}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
      </Box>
    </Box>
  );
}
