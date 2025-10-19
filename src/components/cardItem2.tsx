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

const Carditem2 = ({ isAdmin = false }) => {
  const items = [
    {
      name: "Fish burger",
      ingredients: "fish +tartar sauce + pickles +iceberg",
      price: "500.000",
      image: "burgers/fish burger.jpg",
    },
    {
      name: "Lebanese Fish burger",
      ingredients: "fish +fries +ketchup sauce+ pickles +cole slaw",
      price: "500.000",
      image: "burgers/lebanesefishburger.jpg",
    },
    {
      name: "Fish burger",
      ingredients:
        "fish+ cocktail sauce +mozzarella paty  +tartar sauce + pickles +iceberg",
      price: "650.000",
      image: "burgers/Shrimparella.jpg",
    },
    {
      name: "zinger shrimp burger",
      ingredients:
        "fish +cheddar sauce +halapeno +iceberg +smoked Turkey +dynamite sauce",
      price: "650.000",
      image: "burgers/zingershrimp.jpg",
    },
  ];

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

export default Carditem2;
