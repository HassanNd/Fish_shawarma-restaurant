import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import HomeImage from "./components/homeImage";
import { IntroInfo } from "./components/introInfo";
import NavBar from "./components/Navabar";
import "@fontsource/roboto/500.css";
import { InformationPage } from "./pages/InformationPage";
import { OfferPage } from "./pages/offerPage";
import { Box } from "@mui/material";
import AuthProvider from "./context/Auth/AuthProvider";
import { AdminPage } from "./pages/AdminPage";






function App() {
  return (
    <AuthProvider>
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      alignItems:"center",
      margin:"0 auto",
      width:{
        xs:"100%",
        sm:"100%",
        lg:"100%",
      } ,
      boxSizing: "border-box",
      overflow: "hidden", // Prevent overall scroll
      
    }}>
      
      <BrowserRouter>
        {/* Fixed header section */}
        <Box sx={{ flexShrink: 0 }}>
          <HomeImage />
          <IntroInfo />
          <NavBar />
         
        </Box>
        
        {/* Scrollable content area */}
        <Box sx={{ 
          flexGrow: 1, 
          overflowY: "auto",
          display: "flex",
          flexDirection: "column"
        }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/info" element={<InformationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/offers" element={<OfferPage />} />
            <Route path="/admin/menu"  element={<AdminPage />}/>
          </Routes>
        </Box>
        
      </BrowserRouter>
    </Box>
    </AuthProvider>
  )
}

export default App
