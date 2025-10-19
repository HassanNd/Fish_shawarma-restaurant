import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect } from "react";

const Carditem4 = ({ isAdmin = false }) => {
  const items = [
    {
      name: "Tona",
      ingredients: "Tona +tartar sauce + pickles +iceberg",
      price: "450.000",
      image: "Diet/Tona.jpg",
    },
    {
      name: "3al fahem",
      ingredients: "Tona +tartar sauce + pickles +iceberg",
      price: "700.000",
      image: "Diet/3alfahemdiet.jpg",
    },
    {
      name: "Crab ",
      ingredients: "Crab +tartar sauce + pickles +iceberg",
      price: "450.000",
      image: "Diet/Crabdiet.jpg",
    },
    {
      name: "shawarma",
      ingredients: "fish shawarma +tartar sauce + pickles +iceberg",
      price: "450.000",
      image: "Diet/shawarmadiet.jpg",
    },
    {
      name: "Classic shrimp",
      ingredients: "shrimps +tartar sauce + pickles +iceberg",
      price: "550.000",
      image: "Diet/classicshrimp.webp",
    },
    {
      name: "shrimp & crab ",
      ingredients: "shrimps + crab  +tartar sauce + pickles +iceberg",
      price: "650.000",
      image: "Diet/shrimpandcrabdiet.jpg",
    },
  ];

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch("http://localhost:3001/api/sandwiches");
      const data = await response.json();
      return data;
    };
    fetchdata();
  });

  const handleEditingMenu = () => {};

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        justifyContent: "center",
      }}
    >
      {items.map((item, index) => (
        <Card
          key={index}
          sx={{
            width: 250,
            borderRadius: 3,
            boxShadow: 3,
            position: "relative",
          }}
        >
          <CardMedia
            component="img"
            height="160"
            image={item.image}
            alt={item.name}
          />
          <CardContent>
            <Typography variant="h6">{item.name}</Typography>
            <Typography color="text.secondary">{item.ingredients}</Typography>
            <Typography color="text.prmary" sx={{ fontStyle: "bold" }}>
              {item.price}
            </Typography>
          </CardContent>

          {isAdmin && (
            <IconButton
              onClick={handleEditingMenu}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                backgroundColor: "white",
                "&:hover": { backgroundColor: "#f0f0f0" },
              }}
            >
              <EditIcon sx={{ color: "#16610E" }} />
            </IconButton>
          )}
        </Card>
      ))}
    </Box>
  );
};

export default Carditem4;
