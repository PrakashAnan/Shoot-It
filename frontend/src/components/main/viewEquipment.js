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
        <div className="container-fluid mt-5">
          <Grid container justifyContent="center" spacing={5}>
            <Grid item md={5}>
              <Paper className="backside">
                <Card>
                  <div
                    style={{
                      background:
                        "url(" +
                        url +
                        "/uploads/" +
                        equipmentData.thumbnail +
                        ")",
                      height: "400px",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <CardContent>
                    <Button
                      variant="contained"
                      color="error"
                      className="mt-2"
                      onClick={orderProduct}
                    >
                      ORDER NOW
                    </Button>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
            <Grid item md={4}>
              <Card>
                <CardContent>
                  <h2 className="text-muted h4">{equipmentData.brand}</h2>
                  <h2 className="h2">{equipmentData.title}</h2>
                  <h2 className="display-4 mt-5"> ₹ {equipmentData.price}</h2>

                  {equipmentData.type}

                  <h6>Warrenty Details</h6>
                  {equipmentData.warranty}

                  <p className="mt-5">Features</p>
                  <hr />
                  <p>{equipmentData.features}</p>
                  <p className="h2">{equipmentData.specification}</p>
                  <p className="display-4 mt-5">{equipmentData.highlights}</p>
                  <table>
                    <tr>
                      <th>Product </th>
                      <th>Contact</th>
                      <th>Color</th>
                    </tr>
                    <br></br>
                    <tr>
                      <td>camera</td>
                      <td>7488250997</td>
                      <td>red</td>
                    </tr>
                    <br></br>
                    <tr>
                      <td>LAPTOP</td>
                      <td>8210202909</td>
                      <td>SILVER</td>
                    </tr>
                  </table>
                </CardContent>
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

  return <div className="full-page">{displayEquipmentDetails()}</div>;
};
export default ViewEquipment;
