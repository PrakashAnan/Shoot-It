import { Button, Card, CardContent, Grid, Paper, TextField } from "@mui/material";
import { Formik } from "formik";
import app_config from "../../config";
import "./addequipment.css";

const AddEquipment = () => {

    const productdetail={
        title: "",
        model: "",
        price: "",
        image: "",
        brand:"",
        rentable:"",
        rentPrice:"",
    }

    const url = app_config.api_url;

  const submitEquipment = (values) => {
    fetch(url + "/equipment/add", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.status);
    });
  };

  return (
    <div>
      <Paper>
        <Grid container justifyContent="start">
          <Grid item md={6} sm={2}>
            <Card>
              <CardContent>
              <Formik initialValues={productdetail} onSubmit={submitEquipment}>
                  {({ values, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
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
                  placeholder="Image"
                  label="Image"
                  id="image"
                  type="file"
                  value={values.image}
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
                  placeholder="Rentable"
                  label="Rentable"
                  id="rentable"
                  value={values.rentable}
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

                     <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        className="button w-100 mt-4"
                      >
                        AddEquipment
                      </Button>
                      </form>
                  )}
                </Formik>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} sm={2}>
              <div className="img">
            <img src="https://cdn.mos.cms.futurecdn.net/saRfG5oSLdSTCkC6znXtER.jpg" alt="" />
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default AddEquipment;
