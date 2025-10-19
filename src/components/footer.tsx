import { Box, Button, Typography } from "@mui/material";


export const InstabuttonOnclick=()=>{
  const username="fish_shwarma";
  const appLink=`instagram://user?username=${username}`;
  const webLink=`https://instagram.com/${username}`;
  window.location.href=appLink;

  setTimeout(()=>{
    window.open(webLink , "_blank");
  } ,500);


}


export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",              // full width
        backgroundColor: "#F97A00",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        py: 4,      
        height:"10vh",                // padding top & bottom
        boxSizing: "border-box", 
        flexShrink: 0,   // include padding in width
        marginBottom:"20vh",
        marginTop:"20vh"
      }}
    >
      {/* Slogan */}
      <Typography sx={{ fontStyle: "oblique", textAlign: "center" }}>
        ALL ABOUT FISH AND MORE
      </Typography>

      {/* Social icons */}
      <Box sx={{ display: "flex", gap: 3 }}>
        <Button
          component="img"
          src="/whatsapp.png"
          alt="Whatsapp"
          sx={{ width: 24, height: 24, objectFit: "contain" }}
          onClick={InstabuttonOnclick}
        />
        <Button
          component="img"
          src="/instagram.png"
          alt="Instagram"
          sx={{ width: 24, height: 24, objectFit: "contain" }}
          onClick={InstabuttonOnclick}
        />
      </Box>

      {/* Branding */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          border: "1px solid white",
          px: 2,
          py: 1,
          borderRadius: 1,
        }}
      >
        <Box
          component="img"
          src="/settings.png"
          alt="Settings"
          sx={{ width: 24, height: 24, objectFit: "contain" }}
          
        />
        <Typography sx={{ color: "white" }}>Skyline Software</Typography>
      </Box>
    </Box>
  );
};
