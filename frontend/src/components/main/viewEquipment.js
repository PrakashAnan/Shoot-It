import { Button, Card, CardContent, Grid, Paper, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import app_config from "../config";
import "./viewequimpent.css";



const ViewEquipment = () => {
  const { id } = useParams();

  const [equipmentData, setEquipmentData] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = app_config.api_url;

  const fetchData = () => {
    fetch(url + "/equipment/getbyid/"+id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEquipmentData(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData(); 
  }, []);

  const displayEquipmentDetails = () => {
    if(!loading) {
      return <div className="container-fluid">
      <Grid container justifyContent="center"spacing={1}>
        <Grid item md={4}>
          <Paper className="backside">
            <Card>
              <CardContent>           
                <img class="img-fluid" src="https://images.unsplash.com/photo-1622319977720-9949ac28adc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaHklMjBjYW1lcmF8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                {/* yha image kaise aaega database se */}
               
                <Button
                variant="contained"
                className="mt-2"
                color="success"
                >
                  
                ADD TO CART
                </Button> &nbsp;&nbsp;

                <Button
                variant="contained"
                color="error"
                className="mt-2"
                >
                  ORDER IT
                </Button>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4}>
          <Card>
            <h2>Camera from shootit</h2>
          
                <Card><h1>Price</h1>{equipmentData.price}</Card> 
                <Card><h1>EquipmentName</h1>{equipmentData.name}</Card>
                <Card><h1>Brand</h1>{equipmentData.brand}</Card>
                <Card><h1>Title</h1>{equipmentData.title}</Card>
                <Card><h1>Type</h1>{equipmentData.type}</Card>
                <Card><h1>Warranty</h1>{equipmentData.warranty}</Card>
                <Card><h1>SensorFeature</h1>{equipmentData.sensorfeature}</Card>
                <Card><h1>Delivery</h1>{equipmentData.delivery}</Card>
                <Card><h1>EquipmentName</h1>{equipmentData.name}</Card>
                
                
               
                {/* {equipmentData.sensorfeature}
                {equipmentData.lensfeature}
                {equipmentData.delivery}
                {equipmentData.equipmentname}
                {equipmentData.brand} */}
                </Card>
          <p>Review</p>
          <p>Rating</p>
          <p>Price</p>
          <p>Coupons for you</p>
          <span>
            Special PriceGet extra 20% off upto ₹100 on 1 item(s) (price
            inclusive of discount)
          </span>
          <h5>Available offers</h5>
          <Card>
            <h5>Special Price</h5>{" "}
            <img className="bank_img" src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"/>
            <h5>Bank Offer</h5>{" "}
            <span>5% Cashback on Flipkart Axis Bank Card</span>
            <h5>Bank Offer</h5>{" "}
            <span>Extra 10% Off on this Product upto ₹100</span>
          </Card>
          <Card>
            <a href="">see all offers</a>
            <h5>Partner Offer</h5>{" "}
            <span>
              Sign up for Flipkart Pay Later and get Flipkart Gift Card worth
              ₹100*
            </span>
            <h5>Combo Offer</h5>{" "}
            <span>Offer   Buy 2 items save 5%;Buy 3 or more save 10%</span>
            <h5>Delivery</h5>
            <span>
              Usually delivered in 7 days? Enter pincode for exact delivery
              dates/charges
            </span>
          </Card>
          <Card>
            <h4>Highlights</h4>
            <ul>
              <li>Effective Pixels: 24.1 MP</li>
              <li>Sensor Type: CMOS</li>
              <li>WiFi Available</li>
              <li>Full HD</li>
            </ul>
            <h4>Important Point</h4>
            <span>
              Memory Card is not included in this package. It needs to be
              purchased separately.
            </span>
          </Card>
          <Card>
            <h3>Specifications</h3>
            <span>
              {" "}
              The Box 1 Camera Body, 18 - 55 mm Lens, Battery, Battery Charger
            </span>

            <h4>General</h4>
            <ul>
              <li>Brand</li>
              <li>Model Number</li>
              <li>Model Name</li>
              <li>SLR Variant</li>
              <li>Color</li>
              <li>Type</li>
              <li>Color</li>
              <li>Effective Pixels</li>
              <li>Tripod Socket</li>
              <li>Wifi</li>
            </ul>
            <ol>
              <li>Sony</li>
              <li>EOS 200D II</li>
              <li>eos200dii</li>
              <li>EF-S18-55mm IS STM</li>
              <li>Black</li>
              <li>DSLR</li>
              <li>24.1 MP</li>
              <li>Yes</li>
              <li>Yes</li>
            </ol>
          </Card>
          <Card>
            <h3>Sensor Features</h3>
            {/* SENSOR FEATURES */}
            <ul>
              <li>Sensor Type</li>
              <li>Image Sensor Size</li>
            </ul>
            <ol>
              <li>CMOS</li>
              <li>22.3 x 14.9</li>
            </ol>
          </Card>
          <Card>
            <h3>Lens Features</h3>
            <ul>
              <li>Lens Mount</li>
              <li>Dust Reduction</li>
            </ul>
            <ol>
              <li>EF Mount</li>
              <li>Yes</li>
            </ol>
          </Card>
          <Card>
            <h2>Shutter Features</h2>
          </Card>
          <Card>
            <ul>
              <li>Shutter Speed</li>
              <li>Self-timer</li>
            </ul>

            <ol>
              <li>1/4000 - 30 sec</li>
              <li>Yes</li>
            </ol>
          </Card>
          <Card>
            <h3>Image Features</h3>
            <ul>
              <li>Image Format</li>
            </ul>
            <ol>
              <li>JPEG, RAW, C-RAW, RAW + JPEG, C-RAW + JPEG</li>
            </ol>
          </Card>
          <Card>
            <h2>Video Features</h2>
          </Card>
          <Card>
            <ul>
              <li>Video Resolution</li>
              <li>Video Quality</li>
            </ul>
            <ol>
              <li>1920 x 1080</li>
              <li>Full HD</li>
            </ol>
          </Card>
          <Card>
            <h2>Display Features</h2>
          </Card>
          <Card>
            <ul>
              <li>Display Type</li>
              <li>Display Size</li>
              <li>Touch Screen</li>
            </ul>
            <ol>
              <li>TFT</li>
              <li>3 inch</li>
              <li>Yes</li>
            </ol>
          </Card>
          <Card>
            <h2>Warranty</h2>
          </Card>
          <Card>
            <ul>
              <li>Warranty Summary</li>
              <li>Service Type</li>
              <li>Covered in Warranty</li>
              <li>Not Covered in Warranty</li>
            </ul>

            <ol>
              <p>
                2 Year Warranty (1 year standard warranty + 1 year additional
                warranty from the date of purchase made by the customer.)
              </p>
              <p>Carry On</p>
              <p>
                Warranty of the Product is Limited to Only Manufacturing Defect
                on Camera Body and Lens
              </p>
              <p>
                Warranty Does Not Cover Any External Accessories (Such as
                Battery, Cable, Carrying Bag), Damage Caused to the Product due
                to Improper Installation by Customer
              </p>
            </ol>
          </Card>
        </Grid>
      </Grid>
    </div>
      

      }

  }

  const displaySkeleton = () => {
    if (!loading) {
      return [1, 2, 3, 4].map((e) => (
        <Grid item md={3}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            height={350}
            width={243}
          />
          <Skeleton
            animation="wave"
            variant="text"
            className="mt-3"
            width={50}
          />
          <Skeleton
            animation="wave"
            variant="text"
            className="mt-3"
            width={200}
          />
        </Grid>
      ));
    } else {
      return (

        <Grid container spacing={6}>
          {displaySkeleton()}
        </Grid>
      );
    }
  };

  return (
   <div>
     {displayEquipmentDetails()}
   </div>
  );
};
export default ViewEquipment;


// const ViewEquipment =() => {
//   return(
//     <div className="container">


    

//     <hr className="extra-margins" />

//     <div className="row">
     
//         <div className="col-lg-4">
        
//             <div className="card wow fadeIn" data-wow-delay="0.2s">

                
//                 <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/4-col/img%20(3).jpg" alt="Card image cap" />

                
//                 <div className="card-body">
  
//                     <h4 className="card-title">This is title</h4>
                    
//                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                     <a href="#" className="btn btn-info">Read more</a>
//                 </div>

//             </div>
            
//         </div>
        
//         <div className="col-lg-4">
            
//             <div className="card wow fadeIn" data-wow-delay="0.4s">

               
//                 <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/4-col/img%20(1).jpg" alt="Card image cap" />

                
//                 <div className="card-body">
                    
//                     <h4 className="card-title">This is title</h4>
                  
//                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                     <a href="#" className="btn btn-info">Read more</a>
//                 </div>

            
//         </div>
      
//         <div className="col-lg-4">
           
//             <div className="card wow fadeIn" data-wow-delay="0.6s">

               
//                 <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/4-col/img%20(4).jpg" alt="Card image cap" />

                
//                 <div className="card-body">
                    
//                     <h4 className="card-title">This is title</h4>
                    
//                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                     <a href="#" class="btn btn-info">Read more</a>
//                 </div>

//             </div>
            
//         </div>
        
//     </div>
   
// </div>





// </div>

//     )
// }

// export default ViewEquipment