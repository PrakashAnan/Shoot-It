import { Accordion, AccordionDetails, AccordionSummary, Card, Grid, Paper ,Button } from "@mui/material";
import { useEffect, useState } from "react";
import app_config from "../config";
import toast, { Toaster } from "react-hot-toast";


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
          })
      
        
      };

      useEffect(() => {
        FetchData();
      }, []);

      const deleteEquipment=(id)=>{
        fetch(url+"/equipment/delete/"+id,
        {method:"DELETE"})
        .then((res)=>res.json)
        .then((data)=>{
            console.log(data)
            FetchData()
            toast.success("product deleted successfully...",
            {
                icon: '😁',
                style: {
                  borderRadius: '10px',
                  background: '#333',
                  color: '#fff',
                },
              })
        })
      }



      const displayProducts = () => {
        if (!loading) {
          return productArray.map((equipment) => (
            <div className="container mt-2">
            <Accordion>
              
                <AccordionSummary>
                  <h3> {equipment.title}</h3>
                  
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
    
                        <Button
                        variant="outlined"
                        color="success"
                        className="w-100 mt-3">add item

                        </Button>


                        <Button
                        variant="outlined"
                        color="error"
                        className="w-100 mt-3"
                        onClick={ e =>deleteEquipment(equipment._id)}>
                          delete item

                        </Button>
                        <Button
                        variant="outlined"
                        color="success"
                        className="w-100 mt-3">Edit/Update

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
         return <div>
           <h1>Product Details</h1>
           {displayProducts()}</div>


};

export default ManageEquipment