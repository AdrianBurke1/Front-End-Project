import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
  Container,
} from "@mui/material";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";


// Random name generator
const getRandomName = () => {
  const names = ["Bella", "Max", "Luna", "Charlie", "Oliver", "Lucy", "Leo", "Daisy", "Milo", "Sadie"];
  return names[Math.floor(Math.random() * names.length)];
};

const Adopt = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimals = async () => {
      setLoading(true);
      try {
        const dogRes = await fetch("https://api.thedogapi.com/v1/images/search?limit=6");
        const catRes = await fetch("https://api.thecatapi.com/v1/images/search?limit=6");
        const dogData = await dogRes.json();
        const catData = await catRes.json();

        const formattedDogs = dogData.map((dog) => ({
          id: dog.id,
          image: dog.url,
          name: getRandomName(),
          type: "Dog",
        }));

        const formattedCats = catData.map((cat) => ({
          id: cat.id,
          image: cat.url,
          name: getRandomName(),
          type: "Cat",
        }));

        setAnimals([...formattedDogs, ...formattedCats]);
      } catch (error) {
        console.error("Error fetching animal data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, []);

  if (loading) {
    return (
      <Container sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <>
        <Navbar />
        <Container sx={{ mt: 10 }}>
        <Typography variant="h4" align="center" gutterBottom>
            Meet Our Adoptable Pets
        </Typography>
        <Grid container spacing={4}>
            {animals.map((animal) => (
            <Grid item xs={12} sm={6} md={4} key={animal.id}>
                <Card sx={{ height: "100%" }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={animal.image}
                    alt={animal.name}
                />
                <CardContent>
                <Typography variant="h6">{animal.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                    Type: {animal.type}
                </Typography>
                <Button
                    component={Link}
                    to="/form"
                    variant="contained"
                    sx={{ mt: 2 }}
                >
                    Adopt Me
                </Button>
                </CardContent>
                </Card>
            </Grid>
            ))}
        </Grid>
        </Container>
    </>
  );
};

export default Adopt;
