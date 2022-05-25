import { Button, Card, CardContent, Checkbox, Grid, Paper, TextField } from '@mui/material';
import { Formik } from 'formik';
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import app_config from '../config';

const UpdateEquipment = ({equipmentdetail, fetchEquipments, setShowForm}) => {
    
      const url = app_config.api_url;
      const [thumbnail, setThumbnail] = useState("");
    
      const submitEquipment = (values) => {
        values.thumbnail = thumbnail;
        fetch(url + "/equipment/update/"+equipmentdetail._id, {
          method: "PUT",
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
            fetchEquipments();
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
        <div>
          <Paper>
            <Grid container spacing={2} justifyContent="start">
              <Grid item md={6} sm={2}>
                <Card>
                  <CardContent>
                    <Formik
                      initialValues={equipmentdetail}
                      onSubmit={submitEquipment}
                    >
                      {({ values, handleChange, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
    
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
                          <Checkbox
                            label="Rentable"
                            id="rentable"
                            checked={values.rentable}
                            onChange={handleChange}
                          />
    
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
                            className="button w-50 mt-4"
                          >
                            AddEquipment
                          </Button>
                          <Button
                            type="button"
                            variant="contained"
                            color="error"
                            onClick={e => setShowForm(false)}
                            className="button w-50 mt-4"
                          >
                            Cancel
                          </Button>
                        </form>
                      )}
                    </Formik>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={4} sm={2}>
                <div className="img">
                  <img
                    src="https://images.unsplash.com/photo-1618397806877-f0187730803f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtZXJhc3xlbnwwfHwwfHw%3D&w=1000&q=80"
                    alt=""
                  />
                </div>
              </Grid>
            </Grid>
          </Paper>
        </div>
      );
}

export default UpdateEquipment;