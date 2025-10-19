import { useState, type SetStateAction } from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Auth/AuthContext";

const NavBar = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();



  const handleChange = (event: any, newValue: SetStateAction<number>) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate("/");
        break;
      case 1:
        navigate("/info");
        break;
      case 2:
        navigate("/offers");
        break;
      case 3:
        navigate("/login");
        break;
      default:
        navigate("/");
    }
  };

  

  return (
    <Paper
      elevation={3}
      sx={{
         // change to "fixed" if you want it always visible
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        mt: 3,
        border: "5px solid #16610E",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange}
        sx={{
          display: "flex",
          justifyContent: "center",
          "& .MuiBottomNavigationAction-root": {
            minWidth: { xs: 50, sm: 80, md: 100 },
            fontSize: { xs: "12px", sm: "14px" },
            color: "gray",
          },
          "& .Mui-selected": {
            color: "#F97A00!important", // active color
          },
        }}
      >
        <BottomNavigationAction label="MENU" icon={<MenuBookIcon />} />
        <BottomNavigationAction label="INFO" icon={<InfoIcon />} />
        <BottomNavigationAction label="OFFERS" icon={<LocalOfferIcon />} />
        <BottomNavigationAction label="LOGIN" icon={<LoginIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default NavBar;
