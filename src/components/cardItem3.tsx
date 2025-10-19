import { Card, CardContent, CardMedia, Typography, IconButton, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect } from "react";

 const Carditem3 = ({ isAdmin = false }) => {
  const items = [
    { name: "shrimp panne",ingredients:"10 pieces of shrimps+ fries + tartar sauce + cocktail sauce", price: "700.000", image: "plates/shrimppanneplate.jpg" },
  { name: "grilled shrimp",ingredients:"10 pieces of ABO JAMBO shrimps+ fries + tartar sauce + cocktail sauce", price: "900.000", image: "plates/grilledshrimp.jpg" },
    { name: "3al fahem",ingredients:"3 steak of fish +fries + garlic +special sauce", price: "1.100.000", image: "plates/3alfahem.jpg" },
      { name: "Dynamite panne",ingredients:"10 pieces of shrimps+ fries + tartar sauce + cocktail sauce", price: "700.000", image: "plates/Dynamiteshrimpplate.jpg" },
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

export default Carditem3
