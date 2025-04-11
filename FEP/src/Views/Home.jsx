import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Container, Typography, Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const [dogImages, setDogImages] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random/3");
        const data = await res.json();
        if (data.status === "success") {
          setDogImages(data.message);
        }
      } catch (err) {
        console.error("Failed to fetch dog images", err);
      }
    };

    fetchDogs();
  }, []);

  return (
    <>
      <Navbar />
      <Container sx={{ mt: 10, mb: 6, pl: 20}}>
        <Box sx={{ maxWidth: 700, }}>
          <Slider {...settings}>
            {dogImages.map((src, i) => (
              <Box
                key={i}
                component="img"
                src={src}
                alt={`dog-slide-${i}`}
                sx={{
                  width: '100%',
                  maxHeight: 400,
                  objectFit: 'cover',
                  borderRadius: 3,
                }}
              />
            ))}
          </Slider>
        </Box>
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          At Pawsitive Futures, we believe every animal deserves a loving home.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Located in the heart of Furville, we connect rescued pets with caring humans.
        </Typography>
      </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
