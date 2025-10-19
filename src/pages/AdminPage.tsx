import { Button, Paper, TextField } from "@mui/material"

export const AdminPage=()=>{



  return(
    <Paper sx={{display:"flex" ,  flexDirection:"column"  , gap:"15px" , marginTop:"15px" , height:"100vh" , alignItems:"center" }}>
      <TextField id="outlined-basic" label="name" variant="outlined" />
      <TextField id="outlined-basic" label="ingredients" variant="outlined" />
      <TextField id="outlined-basic" label="price" variant="outlined" />
      <Button variant="contained" sx={{backgroundColor:"#F97A00" , width:""}}>SAVE</Button>
    </Paper>
  )

} 