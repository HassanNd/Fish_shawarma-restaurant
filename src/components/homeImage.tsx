import { CardActionArea, CardMedia, Box, Container } from "@mui/material";

const HomeImage = () => {
  return (
    <Container
      disableGutters
      sx={{
        width: "100vw",
        position: "relative",
        boxShadow: "none",
        padding: 0,
        margin: 0,
      }}
    >
      
      <CardActionArea>
        {/* Background Image */} 
        <CardMedia
          component="img"
          image="/HomeImage4.jpg"
          alt="Home"
          sx={{
            width: {
              xs:"100vw",
              sm:"100vw",
              md:"100vw",
              lg:"80vw"

            },
            height: {
              xs: "20vh", // mobile
              sm: "30vh", // small tablets
              md: "30vh", // laptops
              lg: "40vh", // large screens
            },
            objectFit: "cover",
            
          }}
        />

        {/* Overlay Logo */}
        <Box
          component="img"
          src="/Logo.png"
          alt="Logo overlay"
          sx={{
            position: "absolute",
            top: "90%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: {
              xs: 100,   // mobile
              sm: 100,  // small tablets
              md: 150,  // laptops
              lg: 180,  // large screens
            },

            border: "4px solid orange",
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
            backgroundColor: "white",
            
          }}
        />
      </CardActionArea>
      
    </Container>
  );
};

export default HomeImage;
