import {
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Skeleton,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import app_config from "../config";
import "./viewequimpent.css";

const ViewEquipment = () => {
  const { id } = useParams();

  const [equipmentData, setEquipmentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = app_config.api_url;
  const navigate = useNavigate();

  const fetchData = () => {
    fetch(url + "/equipment/getbyid/" + id)
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

  const orderProduct = () => {
    sessionStorage.setItem("equipment", JSON.stringify(equipmentData));
    navigate("/main/checkout");
  };

  const displayEquipmentDetails = () => {
    if (!loading) {
      return (
        <div className="container-fluid">
          <Grid container justifyContent="center" spacing={5}>
            <Grid item md={6}>
              <Paper className="backside">
                <Card>
                  <div className="img-fluid"
                    style={{
                      background: 'url('+url + "/uploads/" + equipmentData.thumbnail+')',
                      height: "500px",
                      backgroundSize: "cover",
                    }}
                 > </div>
                  <CardContent>
                    <img
                      className="card-img-top img-fluid"
                      height="600"
                      src={equipmentData.name}
                      alt={equipmentData.name}
                      // backend se img kAise aaegaa
                    />
                    <Button
                      variant="contained"
                      className="mt-2"
                      color="success"
                    >
                      ADD TO CART
                    </Button>{" "}
                    &nbsp;&nbsp;
                    <Button
                      variant="contained"
                      color="error"
                      className="mt-2"
                      onClick={orderProduct}
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

                <h1>Price</h1>
                {equipmentData.price}

                <h1>EquipmentName</h1>
                {equipmentData.type}

                <h1>Brand</h1>
                {equipmentData.brand}

                <h1>Title</h1>
                {equipmentData.title}

                <h1>Type</h1>
                {equipmentData.type}

                <h1>Warranty</h1>
                {equipmentData.warranty}

                <h1>SensorFeature</h1>
                {equipmentData.sensorfeature}

                <h1>Delivery</h1>
                {equipmentData.delivery}

                {equipmentData.sensorfeature}
                {equipmentData.lensfeature}
                {equipmentData.delivery}
                {equipmentData.equipmentname}
                {equipmentData.brand}
              </Card>
            </Grid>
          </Grid>
        </div>
      );
    }
  };

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

  return <div>{displayEquipmentDetails()}</div>;
};
export default ViewEquipment;
