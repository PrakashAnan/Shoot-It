import { Button, Card, CardContent, Grid, Paper, TextField } from "@mui/material";
import app_config from "../../config";

const AddEquipment = () => {

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
                <TextField
                  className="w-100 mt-2"
                  autoComplete="off"
                  placeholder="Title"
                  variant="filled"
                  label="Title"
                />
                <TextField
                  className="w-100 mt-2"
                  autoComplete="off"
                  placeholder="Model"
                  variant="filled"
                  label="Model"
                />
                <TextField
                  className="w-100 mt-2"
                  autoComplete="off"
                  variant="filled"
                  placeholder="Price"
                  label="Price"
                />
                <TextField
                  className="w-100 mt-2"
                  autoComplete="off"
                  variant="filled"
                  placeholder="Image"
                  label="Image"
                />
                <TextField
                  className="w-100 mt-2"
                  autoComplete="off"
                  variant="filled"
                  placeholder="Brand"
                  label="Brand"
                />

                <TextField
                  className="w-100 mt-2"
                  autoComplete="off"
                  variant="filled"
                  placeholder="Rentable"
                  label="Rentable"
                />
                <TextField
                  className="w-100 mt-2"
                  autoComplete="off"
                  variant="filled"
                  placeholder="RentPrice"
                  label="RentPrice"
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
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default AddEquipment;
