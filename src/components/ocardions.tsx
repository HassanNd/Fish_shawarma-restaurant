import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Carditem from "./cardItem";
import LunchDiningTwoToneIcon from "@mui/icons-material/LunchDiningTwoTone";
import DirectionsRunTwoToneIcon from "@mui/icons-material/DirectionsRunTwoTone";
import LocalDiningTwoToneIcon from "@mui/icons-material/LocalDiningTwoTone";
import BakeryDiningTwoToneIcon from "@mui/icons-material/BakeryDiningTwoTone";
import { Box, Button, Container } from "@mui/material";
import Carditem2 from "./cardItem2";
import Carditem3 from "./cardItem3";
import Carditem4 from "./cardItem4";

export const InstabuttonOnclick = () => {
  const username = "fish_shwarma";
  const appLink = `instagram://user?username=${username}`;
  const webLink = `https://instagram.com/${username}`;
  window.location.href = appLink;
  setTimeout(() => {
    window.open(webLink, "_blank");
  }, 500);
};

const WhatsappButtinOnclick=()=>{
  const phone="96178704520";
  const message="Hello , I want to book and order !"

  const appLink=`whatsapp://send?phone=${phone}&text=${encodeURIComponent(message)}`
  const webLink=`https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  //Try to open whatsapp App
  window.location.href=appLink

  //if app doesnt exist it opens the Link on web
  setTimeout(()=>{

    window.open(webLink , "_blank")
  }, 500)
}
const OWNERButtinOnclick=()=>{
  const phone="96178704520";
  const message="Hello , I want to book and order !"

  const appLink=`whatsapp://send?phone=03931975&text=HELLO_VERTEX_SOFTWARE`
  const webLink=`https://wa.me/03931975?text=HELLO_VERTEX_SOFTWARE`

  //Try to open whatsapp App
  window.location.href=appLink

  //if app doesnt exist it opens the Link on web
  setTimeout(()=>{

    window.open(webLink , "_blank")
  }, 500)
}

export default  function  AccordionExpandDefault() {




  return (
    <Container sx={{ marginBottom: "20px", width: "100vw" }}>
      <Accordion defaultExpanded id="burgers" sx={{border:"1px solid #FED16A "}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          <LunchDiningTwoToneIcon
            sx={{ marginRight: "4px", color: "#4C763B" }}
          />
          <Typography component="span" sx={{ fontFamily: "sans-serif" }}>
            {" "}
            BURGERS
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Carditem2 />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded id="plates" sx={{border:"1px solid #FED16A "}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          <LocalDiningTwoToneIcon
            sx={{ marginRight: "4px", color: "#4C763B" }}
          />
          <Typography component="span" sx={{ fontFamily: "sans-serif" }}>
            PLATES
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Carditem3 />
          
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded id="sandwiches" sx={{border:"1px solid #FED16A "}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          <BakeryDiningTwoToneIcon
            sx={{ marginRight: "4px", color: "#4C763B" }}
          />
          <Typography component="span" sx={{ fontFamily: "sans-serif" }}>
            SANDWICHES
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Carditem />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded id="diet" sx={{ marginBottom: "30vh"  ,border:"1px solid #FED16A "}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          <DirectionsRunTwoToneIcon
            sx={{ marginRight: "4px", color: "#4C763B" }}
          />
          <Typography component="span" sx={{ fontFamily: "sans-serif" }}>
            DIET
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Carditem4 />
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded
        sx={{
          marginBottom: "30vh",

          backgroundColor: "#F97A00",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          <Box
            component="footer"
            sx={{
              width: "100%", // full width
              backgroundColor: "#F97A00",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              py: 4,
              height: "10vh", // padding top & bottom
              boxSizing: "border-box",
              flexShrink: 0, // include padding in width
              marginBottom: "30vh",
            }}
          >
            {/* Slogan */}
            <Typography sx={{ fontStyle: "oblique", textAlign: "center" }}>
              ALL ABOUT FISH AND MORE
            </Typography>

            {/* Social icons */}
            <Box sx={{ display: "flex", gap: 3 }}>

              <Button
                sx={{ width: 24, height: 24, objectFit: "contain" }}
                onClick={InstabuttonOnclick}
              >
                <img src="instagram.png" alt="instagram" style={{width:"15px"}}/>
              </Button>

              <Button
                sx={{ width: 24, height: 24, objectFit: "contain" }}
                onClick={WhatsappButtinOnclick}
              >
                <img src="whatsapp.png" alt="whatsapp" style={{width:"15px"}} />
                </Button>


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
              <Button onClick={OWNERButtinOnclick} sx={{color:"white"}}>VERTEX SOFTWARE</Button>
            </Box>
          </Box>
        </AccordionSummary>
      </Accordion>
    </Container>
  );
}
