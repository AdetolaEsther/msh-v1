import { Box, Stack, Typography, Divider } from "@mui/material";

export default function Footer() {
  return (
    <Stack
      sx={{
        backgroundColor: " #e7d7d7",
        padding: 4,
        borderTop: "2px solid #ddd",
      }}
    >
      <Stack
        direction={{ xs: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={4}
      >
        <Box>
          <Box
            sx={{
              width: 200,
              height: 200,
              position: "relative",
              overflow: "hidden",
              borderRadius: "50%",
              mb: 2,
            }}
          >
            <img src="/mhs_logo.png" alt="MHS Logo" />
          </Box>
          <Typography variant="body2">
            At MHS, we believe in fashion that speaks volumes. Our mission is
            to provide you with timeless styles that elevate your wardrobe. From
            elegant pieces to bold statements, we offer a wide range of designs
            crafted with the finest fabrics, ensuring both comfort and style.
            <br />
            Discover the magic of fashion at MHS. Whether you're dressing up for
            a special occasion or updating your everyday essentials, our
            collections are here to inspire your next look and help you express
            your unique style.
          </Typography>
          <Stack direction="row" spacing={2} mt={2}>
            <img src="/facebook_icon.png" alt="Facebook" />
            <img src="/twitter_icon.png" alt="Twitter" />
            <img src="/linkedin_icon.png" alt="LinkedIn" />
          </Stack>
        </Box>

        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            COMPANY
          </Typography>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </Box>

        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            GET IN TOUCH
          </Typography>
          <ul>
            <li>+2348130252751</li>
            <li>contact@mhs.com</li>
          </ul>
        </Box>
      </Stack>

      <Divider sx={{ mt: 4 }} />

      <Typography variant="body2" sx={{ textAlign: "center", mt: 2 }}>
        Copyright © 2024 MHS.com - All rights reserved.
      </Typography>
    </Stack>
  );
}
