import { Box } from "@mui/material";

import { CardIcon } from "../components/cardIcons";
import AccordionExpandDefault from "../components/ocardions";


export const HomePage=()=> {
  return (
    <Box sx={{ 
      width: "100%",
  
    }}>
      <CardIcon />
      <AccordionExpandDefault />
      
    </Box>
  );
}
