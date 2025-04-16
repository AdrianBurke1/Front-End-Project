import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Box,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ourTeam = {
  adrianBurke: {
    name: "Adrian Burke",
    bio: "Thrive Apprentice",
    github: "https://github.com/AdrianBurke1",
    image: "https://avatars.githubusercontent.com/u/114108495?v=4",
  },
  evanRosas: {
    name: "Evan Rosas",
    bio: "Thrive Apprentice",
    github: "https://github.com/evanmrosas",
    image: "https://avatars.githubusercontent.com/u/147665124?v=4",
  },
};

function About() {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 10, mb: 6 }}>
        <Typography variant="h4" align="center" gutterBottom color="primary">
          Meet The Team
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {Object.values(ourTeam).map((dev) => (
            <Grid item xs={12} sm={6} md={4} key={dev.name}>
              <Card sx={{ height: "100%", textAlign: "center", boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  image={dev.image}
                  alt={dev.name}
                  sx={{ height: 300, objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {dev.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {dev.bio}
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    href={dev.github}
                    target="_blank"
                    sx={{ mt: 1 }}
                  >
                    View GitHub
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default About;
