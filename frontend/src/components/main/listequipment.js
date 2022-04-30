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

// import "./listproduct.css";

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
    return [1,2,3,4].map((e) => (
      <Grid item md={3}>
        <Skeleton
          animation="wave"
          variant="rectangular"
          height={350}
          width={243}
        />
        <Skeleton animation="wave" variant="text" className="mt-3" width={50} />
        <Skeleton
          animation="wave"
          variant="text"
          className="mt-3"
          width={200}
        />
      </Grid>
    ));
  };

  const displayEquipments = () => {
    if (!loading) {
      return equipmentArray.map((equipment) => (
        <Grid item md={3}>
          <Card>
            <CardMedia
              component="img"
              height="100"
              image={url+"/uploads/"+equipment.thumbnail}
              alt={equipment.name}
            />
            <CardContent>
              <p className="p-title">{equipment.title}</p>
              <p className="text-muted">{equipment.type}</p>
              <p className="text-muted">{equipment.price}</p>
              <p className="text-muted">{equipment.brand}</p>
              <p className="text-muted">{equipment.image}</p>
              
              <span className="p-rating">
                {equipment.rating} <i class="fas fa-star"></i>
              </span>
              &nbsp;&nbsp;
              <span className="text-muted">({equipment.reviews})</span>
              {/* <p className="h4 mt-4">₹ {equipment.price}</p> */}
            </CardContent>
            <CardActions>
              <Button variant="outlined" onClick={(e) => navigate('/main/viewequipment/'+equipment._id)}>
                View More
              </Button>
            </CardActions>
          </Card>
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
    <div className="container">
      <h1>List Equipments</h1>
      <Grid container spacing={6}>
        {displayEquipments()}
       
      </Grid>
    </div>
  );
};

export default ListEquipments;