import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Form = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <Container sx={{ mt: 10 }}>
        {!submitted ? (
          <>
            <Typography variant="h4" gutterBottom>
              Adoption Interest Form
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField label="Your Name" required />
              <TextField label="Email Address" type="email" required />
              <TextField label="Why do you want to adopt?" multiline rows={4} required />
              <Button type="submit" variant="contained">Submit</Button>
            </Box>
          </>
        ) : (
          <Box textAlign="center">
            <Typography variant="h4" color="primary" gutterBottom>
              🎉 Thank you for your interest!
            </Typography>
            <Typography sx={{ mb: 3 }}>
              We’ll reach out to you shortly about your future furry friend.
            </Typography>
            <Button variant="outlined" component={Link} to="/adopt">
              Back to Adopt Page
            </Button>
          </Box>
        )}
      </Container>
    </>
  );
};

export default Form;
