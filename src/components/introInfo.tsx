import { Container, Typography, Stack } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import "@fontsource/roboto/300.css";

export const IntroInfo = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: { xs: "50px", md: "80px" },
        textAlign: "center",
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "35px" },
          fontFamily: "revert",
          fontWeight: 600,
          marginTop:{
            xl:"40px",
            lg:"40px",//laptop screen
            
          }
        }}
      >
        Fish Shawarma
      </Typography>

      {/* Subtitle */}
      <Typography
        sx={{
          fontSize: { xs: "20px", sm: "25px", md: "30px", lg: "35px" },
          fontFamily: "revert-layer",
          color: "gray",
        }}
      >
        All About Fish And More !!
      </Typography>

      {/* Location + Phone */}
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="center"
        sx={{ marginTop: "8px", flexWrap: "wrap" }}
      >
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            color: "gray",
            fontSize: { xs: "16px", sm: "20px", md: "25px" },
          }}
        >
          <LocationOnIcon sx={{ width: 16, height: 16, mr: 0.5 }} />
          kfarouman
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "20px", md: "25px" },
            color: "gray",
          }}
        >
          |
        </Typography>

        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            color: "gray",
            fontSize: { xs: "16px", sm: "20px", md: "25px" },
          }}
        >
          <PhoneIcon sx={{ width: 16, height: 16, mr: 0.5 }} />
          78704520
        </Typography>
      </Stack>
    </Container>
  );
};
