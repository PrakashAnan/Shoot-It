import { Card, CardContent, Grid, Paper, TextField } from "@mui/material";
import React from "react";

const AdminProfile = () => {
  return (
    <div>
      <h1>Signup Here</h1>
      <Paper>
      <Grid container justifyContent="center">
        <Grid item md={6}>
  
            <Card className="mt-4 mb-4">
              <CardContent>

                <TextField 
                variant="outlined"
                className="w-100"
                label="Enter Your UserName "
                id="username"
               />
               <br/>

                <TextField 
                variant="outlined"
                className=" w-100"
                label="Enter Your Email"
                id="mobileno"
                 />
                 <br/>

                <TextField 
                variant="outlined"
                className=" w-100"
                label="Enter Your MobileNo"
                id="mobileno"
                 />
                 <br/>

                <TextField 
                variant="outlined"
                className=" w-100"
                label="Enter Your Password"
                id="Password"
                />
                <br/>

                
              </CardContent>
            </Card>
          
        </Grid>
      </Grid>
      </Paper>
    </div>
  );
};

export default AdminProfile;
