// display the list product
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { useState } from "react";
import app_config from "../../config";



const ListProduct = () =>{

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



      const displayProducts = () => {
        if (!loading) {
          return productArray.map((equipment) => (
            <div className="container mt-2">
            <Accordion>
                <AccordionSummary>
                  <h1>Display Products</h1>
                </AccordionSummary>
            <AccordionDetails>
                <h1>hlwoo</h1>

            </AccordionDetails>
            </Accordion>
            </div>
          )
          )}


        }
return <div>{displayProducts()}</div>

   
    
};
export default ListProduct;