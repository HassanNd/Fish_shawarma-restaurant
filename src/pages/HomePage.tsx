import { Box, Container } from "@mui/material";
import NavBar from "../components/Navabar";
import HomeImage from "../components/homeImage";
import { IntroInfo } from "../components/introInfo";
import { CardIcon } from "../components/cardIcons";
import AccordionExpandDefault from "../components/ocardions";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "../components/footer";

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
