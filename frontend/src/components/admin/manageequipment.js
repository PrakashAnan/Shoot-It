import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { useEffect, useState } from "react";
import app_config from "../config";
import {
    Grid,
    Card,
    CardContent,
    Paper,
    Button,
    Checkbox,
    FormControlLabel,
  } from "@mui/material";



const ManageEquipment = () =>{
        
    const [productArray, setProductArray] = useState([]);
    const [loading, setLoading] = useState(true);

    // URL link
    const url = app_config.api_url;

       const FetchData = () => {
        fetch(url + "/equipment/getall", {
          method: "GET",
          // data hmko send ni krna hai isliye get method use karte hai
        })
          .then((res) => res.json())
          // res se json nikalne k liye
          .then((data) => {
            // dusra then jo hai json data read krne k liye
            console.log(data);
            setProductArray(data);
            setLoading(false);
            // data print krwa rhe hai
          });
      };

      useEffect(() => {
        FetchData();
      }, []);



      const displayProducts = () => {
        if (!loading) {
          return productArray.map((equipment) => (
            <div className="container mt-2">
            <Accordion>
                <AccordionSummary>
                  <h1>Display Products</h1>
                  
                </AccordionSummary>
            <AccordionDetails>
            <Grid container spacing={2}>
                <Grid item md={6}>
                  <ul class="list-group">
                    <li class="list-group-item">
                      EquipmentTitle:{equipment.title}
                    </li>
                    <li class="list-group-item">
                    Price::{equipment.price}
                    </li>
                    <li class="list-group-item">
                    Rent Price::{equipment.rentprice}
                    </li>
                    <li class="list-group-item">
                    Model::{equipment.model}
                    </li>
                    <li class="list-group-item">
                    Brand::{equipment.brand}
                    </li>
                    <li class="list-group-item">
                    Type::{equipment.type}
                    </li>
                    <li class="list-group-item">
                    Rentable::{equipment.rentable}
                    </li>
                    </ul>
                    </Grid>
                    <Grid item md={6}>
                  <Paper>
                    <Card>
                      <div className="check mt-2">
                        {/* <h2>Equipment Update</h2> */}
                        <Button
                        variant="contained"
                        color="success"
                        className="w-100">

                        </Button>
                        <Button
                        variant="contained"
                        color="success"
                        className="w-100 mt-3">

                        </Button>
                        <Button
                        variant="outlined"
                        color="success"
                        className="w-100">

                        </Button>
                      </div>
                    </Card>
                  </Paper>
                </Grid>
                </Grid>
            </AccordionDetails>
            </Accordion>
            </div>
          )
          )}


          };
         return <div>{displayProducts()}</div>


};

export default ManageEquipment