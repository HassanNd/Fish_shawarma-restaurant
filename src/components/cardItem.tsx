import { Card, CardContent, CardMedia, Typography, IconButton, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect } from "react";

const Carditem = ({ isAdmin = false }) => {
  const items = [
    { name: "Fish shawarama",ingredients:"shawarma fish + fries + pickles + tartar sauce+ special sauce", price: "400.000", image: "sandwiches/fishshawarma.jpg" },
    { name: "Fish 3al fahem",ingredients:"fish 3al fahem + garlic+ pickles+ fries +special sauce", price: "700.000", image: "sandwiches/fish3alfahem.jpg" },
    { name: "Fish harra",ingredients:"special fish with spicy mix !! ", price: "450.000", image: "sandwiches/fishharra.jpg" },
    { name: "Fajita shrimp",ingredients:"fresh avocado sauce +corn + pickles +iceberg ", price: "750.000", image: "sandwiches/fajitashrimp.jpg" },
    { name: "classic shrimp",ingredients:" shrimps +pickles + tartar sauce+ icberg +lemon  ", price: "550.000", image: "sandwiches/classicshrimp.jpg" },
    { name: "shrimp panne",ingredients:"panne shrimps +tartar sauce +cocktail sauce +pickles +iceberg ", price: "550.000", image: "sandwiches/shrimppanne.jpg" },
    { name: "Dynamite shrimp",ingredients:"shrimps + dynamite sauce + pickles + iceberg + habat Al baraka ", price: "600.000", image: "sandwiches/dynamiteshrimp.jpg" },
    { name: "Smoked turkey shrimp",ingredients:"smoked turkey +tartar sauce +mozzarella cheese +pickles + iceberg ", price: "700.000", image: "sandwiches/smokedturkeyshrimp.jpg" },
    { name: "Mexican shrimp",ingredients:"mexican shrimps +mexican sauce +mozzarella cheese +halapeno + iceberg ", price: "700.000", image: "sandwiches/mexicanshrimp.jpg" },
    { name: "shrimp and crap",ingredients:"shrimps + crab(hallal) + lemon +tartar sauce +pickles + iceberg ", price: "650.000", image: "sandwiches/shrimpcrab.jpg" },
    { name: "crab",ingredients:" crab(hallal) + lemon +tartar sauce +pickles + iceberg ", price: "450.000", image: "sandwiches/crab.jpg" },

  ];

  useEffect(()=>{
    const fetchdata=async()=>{
      const response=await fetch('http://localhost:3001/api/sandwiches')
      const data=await response.json()
      return data
    }
    fetchdata()
  })

  const handleEditingMenu=()=>{
        
  }


  

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
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
          <CardMedia component="img" height="160" image={item.image} alt={item.name} />
          <CardContent>
            <Typography variant="h6">{item.name}</Typography>
            <Typography color="text.secondary">{item.ingredients}</Typography>
            <Typography color="text.prmary" sx={{fontStyle:"bold"}}>{item.price}</Typography>
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
              <EditIcon sx={{color:"#16610E"}} />
            </IconButton>
          )}
        </Card>
      ))}
    </Box>
  );
};

export default Carditem;
