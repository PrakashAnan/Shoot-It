import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Skeleton,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import app_config from "../config";

const ListEquipments = () => {
  const [equipmentArray, setEquipmentArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = app_config.api_url;
  const navigate = useNavigate();

  // Step 1 : Fetch Data from server
  const fetchData = () => {
    fetch(url + "/equipment/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEquipmentArray(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displaySkeleton = () => {
    return [1, 2, 3, 4].map((e) => (
      <Grid item md={4}>
        <Skeleton
          animation="wave"
          variant="rectangular"
          height={250}
          width={200}
        />
        <Skeleton animation="wave" variant="text" classNameName="mt-3" width={50} />

        <Skeleton
          animation="wave"
          variant="text"
          classNameName="mt-3"
          width={200}
        />
      </Grid>
    ));
  };

  const displayEquipments = () => {
    if (!loading) {
      return equipmentArray.map((equipment) => (
        <div className="col-lg-4 col-md-12 mb-4">
          <div className="card">
            <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
              data-mdb-ripple-color="light">
              <img src={url + "/uploads/" + equipment.thumbnail}
                className="w-100" />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5><span className="badge bg-primary ms-2">New</span></h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </div>
              </a>
            </div>
            <div className="card-body">
              <a href="" className="text-reset">
                <h5 className="card-title mb-3">Product name</h5>
              </a>
              <a href="" className="text-reset">
                <p>Category</p>
              </a>
              <h6 className="mb-3">$61.99</h6>
            </div>
          </div>
        </div>



      )
      );
    } else {
      return (
        <Grid container spacing={6}>
          {displaySkeleton()}
        </Grid>
      );
    }
  };
  return (
    <div className="container">
      <h1>List Equipments</h1>
      <div className="row" container spacing={6}>
        {displayEquipments()}
      </div>
    </div>
  );
};
export default ListEquipments;
