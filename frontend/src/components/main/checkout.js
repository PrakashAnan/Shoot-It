import { Button, Card, Grid, Paper, TextField } from "@mui/material";

const CheckOut = () => {
    return(
        <div>
        <h1>CHECKOUT PAGE</h1>
        <Paper>
           <Grid container spacing={6}>
              <Grid item md={6} justifyContent="center">
                  
                 <Card>
                <form>
                    <h4>Billing Details</h4>
                 <TextField
                  className="w-100 mt-2"
                  variant="outlined"
                  placeholder="Enter Your Email Address"
                  label="Email Address"

                 />
                 <TextField
                  className="w-100 mt-2"
                  variant="outlined"
                  placeholder="Enter Your Name"
                  label="Name"

                 />
                 <TextField
                  className="w-100 mt-2"
                  variant="outlined"
                  placeholder="Country Name"
                  label="United State"

                 />
                 <TextField
                  className="w-100 mt-2"
                  variant="outlined"
                  placeholder=" House number and street name"
                  label="Address"

                 />
                 <TextField
                  className="w-100 mt-2"
                  variant="outlined"
                  placeholder="Enter Your Pincode"
                  label="Pincode"

                 />
                 <TextField
                  className="w-100 mt-2"
                  variant="outlined"
                  placeholder=""
                  label="Town/City"

                 />
                 <TextField
                  className="w-100 mt-2"
                  variant="outlined"
                  placeholder=""
                  label="Phone No"
                  type="number"

                 />
                 <Button
                 type="submit"
                 variant="contained"
                 className="w-100 mt-2"
                 color="secondary">
                 PLACE YOUR ORDER
                 </Button>
                 </form>
                 </Card>

              </Grid>
              <Grid item md={6}>
                  <h4>YOUR ORDER</h4>
                  <Card>
                      <h3>Product Details</h3>
                       <div className="container">
                         

                       </div>
                  </Card>

              </Grid>
            </Grid> 
        </Paper>
        </div>
    )

}
export default CheckOut;