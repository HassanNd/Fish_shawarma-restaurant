import { BottomNavigationAction, Box } from "@mui/material";
import { useState } from "react";
import LunchDiningTwoToneIcon from "@mui/icons-material/LunchDiningTwoTone";
import LocalDiningTwoToneIcon from "@mui/icons-material/LocalDiningTwoTone";
import BakeryDiningTwoToneIcon from "@mui/icons-material/BakeryDiningTwoTone";
import DirectionsRunTwoToneIcon from "@mui/icons-material/DirectionsRunTwoTone";
import type { JSX } from "react/jsx-runtime";

export const CardIcon = () => {
  const [active, SetActive] = useState(-1);

  const cards = [
    { id: 1, label: "burgers", icon: <LunchDiningTwoToneIcon /> },
    { id: 2, label: "plates", icon: <LocalDiningTwoToneIcon /> },
    { id: 3, label: "sandwiches", icon: <BakeryDiningTwoToneIcon /> },
    { id: 4, label: "diet", icon: <DirectionsRunTwoToneIcon /> },
  ];

  const handleClick = (card: { id: any; label: any; icon?: JSX.Element; }) => {
    SetActive(card.id);

    // Scroll to the Accordion section
    const section = document.getElementById(card.label);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box
      sx={{
        overflowX: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        flexWrap: "wrap",
        p: 2,
      }}
    >
      {cards.map((card) => (
        <Box
          key={card.id}
          onClick={() => handleClick(card)}
          sx={{
            flex: "0 0 auto",
            width: { xs: "25vw", sx: "15vw" },
            fontSize: { xs: "50px", sm: "40px" },
            height: "12vh",
            backgroundColor: active === card.id ? "orange" : "white",
            color: active === card.id ? "white" : "orange",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            borderRadius: "10px",
            boxShadow: "0 3px 6px rgba(0,0,0,1)",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            "&:hover": { transform: "scale(1.05)" },
          }}
        >
          <BottomNavigationAction
            label={card.label}
            icon={card.icon}
            showLabel
            sx={{ color: active === card.id ? "white" : "#F97A00" }}
          />
        </Box>
      ))}
    </Box>
  );
};
