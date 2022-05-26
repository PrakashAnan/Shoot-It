import {
  Button,
  Card,
  CardContent,
  Checkbox,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import Swal from "sweetalert2";
import app_config from "../config";
import "./addequipment.css";

const AddEquipment = () => {
  const equipmentdetail = {
    type: "",
    review:"",
    rating:"",
    model: "",
    price: "",
    image: "",
    brand: "",
    comboOffer: "",
    specification: "",
    availableOffer: "",
    delivery: "",
    sensorfeature:"",
    lensfeature:"",
    warranty:"",
    highlights:"",
    rentable: false,
    rentPrice: "",
    thumbnail: String,
  }

  const url = app_config.api_url;
  const [thumbnail, setThumbnail] = useState("");

  const submitEquipment = (values) => {
    values.thumbnail = thumbnail;
    fetch(url + "/equipment/add", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.status);
      if (res.status == 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Added",
        })
      }
    });

  };

  const uploadThumbnail = (e) => {
    console.log("File selected");
    let file = e.target.files[0];
    console.log(file.name);
    setThumbnail(file.name);
    let form = new FormData();
    form.append("myfile", file);
    fetch(url + "/util/uploadfile", { method: "POST", body: form }).then(
      (res) => console.log(res.status)
    );
  };

  return (
    <div className="container">
      <Formik initialValues={equipmentdetail} onSubmit={submitEquipment}>

{({ values, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
      <Card>
      <CardContent>
      <Grid container spacing={10}>
              <Grid item md={6}>
                   

                      <TextField
                        className="w-100 mt-2"
                        autoComplete="off"
                        placeholder="Type"
                        variant="filled"
                        label="Type"
                        id="type"
                        value={values.type}
                        onChange={handleChange}
                      />
                      </Grid>
                      <Grid item md={6}>  

                      <TextField
                        className="w-100 mt-2"
                        autoComplete="off"
                        placeholder="Review"
                        variant="filled"
                        label="Review"
                        id="review"
                        value={values.review}
                        onChange={handleChange}
                      />
                      </Grid>
                      </Grid>


                      <Grid container spacing={10}>
                     <Grid item md={6}>
                     <TextField
                        className="w-100 mt-2"
                        autoComplete="off"
                        placeholder="Rating"
                        variant="filled"
                        label="Rating"
                        id="rating"
                        value={values.rating}
                        onChange={handleChange}
                      />
                      </Grid>
                      <Grid item md={6}>
                      <TextField
                      className="w-100 mt-2"
                      autoComplete="off"
                      placeholder="Title"
                      variant="filled"
                      label="Title"
                      id="title"
                      value={values.title}
                      onChange={handleChange}
                    />
                    </Grid>
                    </Grid>
                     
                      <Grid container spacing={10}>
                      <Grid item md={6}>
                      <TextField
                        className="w-100 mt-2"
                        autoComplete="off"
                        placeholder="Model"
                        variant="filled"
                        label="Model"
                        id="model"
                        value={values.model}
                        onChange={handleChange}
                      />
                      </Grid>
                      <Grid item md={6}>
                      <TextField
                        className="w-100 mt-2"
                        autoComplete="off"
                        variant="filled"
                        placeholder="Price"
                        label="Price"
                        id="price"
                        value={values.price}
                        onChange={handleChange}
                      />
                      </Grid>
                    </Grid>
                      
                      
                      
                     <Grid container spacing={10}>
                     <Grid item md={6}>
                      <TextField
                        className="w-100 mt-2"
                        autoComplete="off"
                        variant="filled"
                        placeholder="Brand"
                        label="Brand"
                        id="brand"
                        value={values.brand}
                        onChange={handleChange}
                      />

                      </Grid>


                      <Grid item md={6}>
                      <TextField
                        className="w-100 mt-2"
                        autoComplete="off"
                        variant="filled"
                        placeholder="comboOffer"
                        label="comboOffer"
                        id="comboOffer"
                        value={values.comboOffer}
                        onChange={handleChange}
                      />

                       </Grid>
                       </Grid>


                      <Grid container spacing={10}>
                      <Grid item md={6}>
                       <TextField
                        className="w-100 mt-2"
                        autoComplete="off"
                        variant="filled"
                        placeholder="specification"
                        label="specification"
                        id="specification"
                        value={values.specification}
                        onChange={handleChange}
                      />

                       </Grid>

                       <Grid item md={6}>
                       <TextField
                        className="w-100 mt-2"
                        autoComplete="off"
                        variant="filled"
                        placeholder="availableOffer"
                        label="availableOffer"
                        id="availableOffer"
                        value={values.availableOffer}
                        onChange={handleChange}
                      />
                      </Grid>

                      </Grid>
                
                
                      <Grid container spacing={10}>
                       <Grid item md={6}>
                       <TextField
                        className="w-100 mt-2"
                        autoComplete="off"
                        variant="filled"
                        placeholder="delivery"
                        label="delivery"
                        id="delivery"
                        value={values.delivery}
                        onChange={handleChange}
                      />
                     </Grid>


                    <Grid item md={6}>
                       <TextField
                        className="w-100 mt-2"
                        autoComplete="off"
                        variant="filled"
                        placeholder="sensorfeature"
                        label="sensorfeature"
                        id="sensorfeature"
                        value={values.sensorfeature}
                        onChange={handleChange}
                      />

                     </Grid>
                    </Grid>

                <Grid container spacing={10}>
                  <Grid item md={6}>
                  <TextField
                        className="w-100 mt-2"
                        autoComplete="off"
                        variant="filled"
                        placeholder="lensfeature"
                        label="lensfeature"
                        id="lensfeature"
                        value={values.lensfeature}
                        onChange={handleChange}
                      />
                  </Grid>

                  <Grid item md={6}>
                  <TextField
                        className="w-100 mt-2"
                        autoComplete="off"
                        variant="filled"
                        placeholder="warranty"
                        label="warranty"
                        id="warranty"
                        value={values.warranty}
                        onChange={handleChange}
                      />
                      </Grid>
                     </Grid>


                        <Grid container spacing={10}>

                          <Grid item md={6}>
                          <TextField
                        className="w-100 mt-2"
                        autoComplete="off"
                        variant="filled"
                        placeholder="RentPrice"
                        label="RentPrice"
                        id="rentPrice"
                        value={values.rentPrice}
                        onChange={handleChange}
                      />

                          </Grid>



                        <Grid item md={6}>
                        <TextField
                        className="w-100 mt-2"
                        autoComplete="off"
                        variant="filled"
                        placeholder="Highlights"
                        label="highlights"
                        id="highlights"
                        value={values.highlights}
                        onChange={handleChange}
                      />

                     </Grid>
                     </Grid>
      
                      <Checkbox
                        label="Rentable"
                        id="rentable"
                        checked={values.rentable}
                        onChange={handleChange}
                      />
                        <Grid container spacing={10}>
                        <Grid item md={6}>
                      
                      </Grid>
                      </Grid>

                      <label>Upload thumbnail</label>
                      <input
                        type="file"
                        onChange={uploadThumbnail}
                        className="form-control"
                      />

                      <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        className="button w-100 mt-4"
                      >
                        AddEquipment
                      </Button>
                  
                
                </CardContent>
                </Card>
                </form>
                 )} 
                </Formik>
          
                      
            
    
    </div>
  );
};
export default AddEquipment;
