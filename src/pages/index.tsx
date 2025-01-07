import Footer from "@/components/footer";
import Header from "@/components/header";
import { Stack, Typography, Box } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

const cards = [
  {
    image: '/dummy_4.png',
    title: 'Exclusive Collections',
    description: (
      <>
        Discover the latest trends and timeless pieces handpicked for you. Elevate your style with our exclusive collections.
      </>
    ),
  },
  {
    image: '/dummy_8.png',
    title: 'Seamless Shopping Experience',
    description: (
      <>
        Enjoy a hassle-free checkout process designed for fashion lovers. Shop your favorites effortlessly and in style.
      </>
    ),
  },
  {
    image: '/dummy_16.png',
    title: 'Elegant Designs',
    description: (
      <>
        Transform your wardrobe with designs that exude elegance and charm. Our pieces are crafted to make a statement every time.
      </>
    ),
  },
];

export default function about() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentCard = cards[currentIndex];

  return (
    <Stack>
     <Header/>
      <Box
        sx={{
          width: "100%",
          height: "80",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
        }}
      >
        <Box
          component="img"
          src={currentCard.image}
          alt={currentCard.title}
          sx={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            backgroundSize:'cover',
            borderRadius: "8px",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width:'50%',
            bottom: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            color: " #e7d7d7",
            padding: 2,
            borderRadius: "8px",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {currentCard.title}
          </Typography>
          <Typography variant="body1">{currentCard.description}</Typography>
        </Box>
      </Box>
      <Footer />

    </Stack>
    
  );
}
