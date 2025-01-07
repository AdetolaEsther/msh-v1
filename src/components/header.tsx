import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";


export default function Header() {
return(
<Stack>
<Stack
        sx={{
          alignItems: "center",
          backgroundColor: "#f5f5f5",
          padding: 2,
          borderRadius: "8px",
        }}
      >
        <Box
          sx={{
            width: 200,
            height: 200,
            position: "relative",
            overflow: "hidden",
            borderRadius: "50%",
          }}
        >
          <Image
            src="/mhs_logo.png"
            alt="MHS Logo"
            layout="fill"
          />
        </Box>

        <Typography
          sx={{
            fontSize: "50px",
            fontWeight: "semi-bold",
          }}
        >
          Mikun House of Styles
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            color: "gray",
          }}
        >
          Welcome to the Home page!
        </Typography>
      </Stack>
</Stack>
)
  }