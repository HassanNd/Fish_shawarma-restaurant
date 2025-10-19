import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import HttpsIcon from "@mui/icons-material/Https";
import { useRef, useState } from "react";
import { BaseURL } from "../constants/BasrUrl";
import { useAuth } from "../context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";


export const LoginPage = () => {

  // const navigate=useNavigate()

  // //useState for detecting errors
  // const [error, SetError] = useState("");
  // //useState for loading state
  // const [loading, SetLoading] = useState(false);

  // //Reference to the inputs in the form
  // const usernameRef = useRef<HTMLInputElement>(null);
  // const passwordRef = useRef<HTMLInputElement>(null);

  // const {login}=useAuth()

  // //Getting the values of the inputs on submission
  // const onSubmit = async () => {
  //   const username = usernameRef.current?.value;
  //   const password = passwordRef.current?.value;

  //   //configuring that the user exters the   username and password
  //   if (!username || !password) {
  //     SetError("Invalid Input");
  //     return;
  //   }

  //   //Default values of the states
  //   SetLoading(true);
  //   SetError("");

    
  //     //Sending the response to the backend
  //     const response = await fetch(`${BaseURL}/login`, {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify({ username, password }),
  //     });
  //     //getting the data from my response
      

  //     //checking the response
  //     if (!response.ok) {
  //       SetError(
  //         "unable to login , please try different credentials"
  //       );
  //       SetLoading(false)
  //       return;
  //     }

  //     const token = await response.json();

  //     if(!token){
  //       SetError("incorrect token")
  //       return
  //     }


  //   login(username ,token)
  //   navigate("/admin/menu")
    
    
  // }
  

  return (
    <Container
      sx={{
        marginTop: "25px",
        marginBottom:"200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: "20px",
        gap: "16px",
      height:"100vh"
      }}
    >
      <LockPersonIcon sx={{ fontSize: 40, color: "orange" }} />
      <Typography sx={{ fontFamily: "cursive" }}>Sign-in</Typography>
      {/* {error && (
        <Alert severity="error" sx={{ width: "100%", marginBottom: "10px" }}>
          {error}
        </Alert>
      )} */}

      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          // inputRef={usernameRef}
          id="input-with-sx"
          label="username"
          variant="standard"
        />
      </Box>

      <Box
        sx={{ display: "flex", alignItems: "flex-end", marginBottom: "20px" }}
      >
        <HttpsIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          // inputRef={passwordRef}
          id="input-with-sx"
          label="password"
          variant="standard"
        />
      </Box>

      <Button
        // onClick={onSubmit}
        variant="contained"
        sx={{ backgroundColor: "orange" }}
      >
        {/* {loading ? "loading..." : "Login"} */}
        LOGIN
        
      </Button>
    </Container>
  );
};
