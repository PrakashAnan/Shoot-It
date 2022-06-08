import {
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
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
    title: "",
    type: "",
    model: "",
    price: "",
    image: "",
    brand: "",
    comboOffer: "",
    specification: "",
    availableOffer: "",
    delivery: "",
    sensorfeature: "",
    lensfeature: "",
    warranty: "",
    highlights: "",
    rentable: false,
    rentPrice: "",
    thumbnail: String,
  };

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
        });
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
    <div className="container-fluid">
      <Formik initialValues={equipmentdetail} onSubmit={submitEquipment}>
        {({ values, handleChange, handleSubmit }) => (
          <Card className="full-page">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-3">
                  <div
                    style={{
                      background:
                        "url(https://www.uscreen.tv/wp-content/uploads/2018/11/Ultimate-video-production-equipment.jpg)",
                      backgroundSize: "cover",
                      height: "100%",
                    }}
                  ></div>
                </div>
                <div className="col-md-9">
                  <CardContent>
                    <p className="display-4 text-muted">Add New Equipment</p>
                    <hr />
                    <Grid container spacing={5}>
                      <Grid item md={12} sx={{ mt: 5 }}>
                        <TextField
                          className="w-100 mt-2"
                          autoComplete="off"
                          placeholder="Title"
                          label="Title"
                          id="title"
                          value={values.title}
                          onChange={handleChange}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={10}>
                      <Grid item md={4} sx={{ mt: 3 }}>
                        <TextField
                          className="w-100 mt-2"
                          autoComplete="off"
                          placeholder="Brand"
                          label="Brand"
                          id="brand"
                          value={values.brand}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item md={4} sx={{ mt: 3 }}>
                        <TextField
                          className="w-100 mt-2"
                          autoComplete="off"
                          placeholder="Model"
                          label="Model"
                          id="model"
                          value={values.model}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item md={4} sx={{ mt: 3 }}>
                        <TextField
                          className="w-100 mt-2"
                          autoComplete="off"
                          placeholder="Type"
                          label="Type"
                          id="type"
                          value={values.type}
                          onChange={handleChange}
                        />
                      </Grid>
                    </Grid>

                    <Grid container spacing={10}>
                      <Grid item md={6} sx={{ mt: 3 }}>
                        <TextField
                          className="w-100 mt-2"
                          autoComplete="off"
                          placeholder="Price"
                          label="Price"
                          id="price"
                          value={values.price}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item md={6} sx={{ mt: 3 }}>
                        <TextField
                          className="w-100 mt-2"
                          autoComplete="off"
                          placeholder="RentPrice"
                          label="RentPrice"
                          id="rentPrice"
                          value={values.rentPrice}
                          onChange={handleChange}
                        />
                      </Grid>
                    </Grid>

                    <Grid container spacing={10}>
                      <Grid item md={12} sx={{ mt: 3 }}>
                        <TextField
                          className="w-100 mt-2"
                          autoComplete="off"
                          placeholder="warranty"
                          label="warranty"
                          id="warranty"
                          value={values.warranty}
                          onChange={handleChange}
                        />
                      </Grid>
                    </Grid>

                    <Grid container spacing={10}>
                      <Grid item md={6} sx={{ mt: 3 }}>
                        <TextField
                          className="w-100 mt-2"
                          autoComplete="off"
                          multiline
                          rows={3}
                          placeholder="specification"
                          label="specification"
                          id="specification"
                          value={values.specification}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item md={6} sx={{ mt: 3 }}>
                        <TextField
                          className="w-100 mt-2"
                          autoComplete="off"
                          multiline
                          rows={3}
                          placeholder="Highlights"
                          label="highlights"
                          id="highlights"
                          value={values.highlights}
                          onChange={handleChange}
                        />
                      </Grid>
                    </Grid>
                    <label
                      className="btn btn-outline-dark mt-3"
                      htmlFor="thumb"
                    >
                      <i class="fas fa-upload"></i>Upload Thumbnail
                    </label>
                    <input
                      type="file"
                      id="thumb"
                      onChange={uploadThumbnail}
                      className="hidden"
                      placeholder="Select Equipment Display Image"
                    />
                    <br />
                    <FormControlLabel
                      control={
                        <Checkbox
                          id="rentable"
                          checked={values.rentable}
                          onChange={handleChange}
                        />
                      }
                      label="This Item is Available for Rent"
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
                </div>
              </div>
            </form>
          </Card>
        )}
      </Formik>
    </div>
  );
};
export default AddEquipment;
