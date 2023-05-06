import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Rating,
  Skeleton,
} from "@mui/material";
import { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useNavigate } from "react-router-dom";
import app_config from "../config";
import "./listequipment.css";

const ListEquipments = () => {
  const [equipmentArray, setEquipmentArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = app_config.api_url;
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");
  const [keyword, setKeyword] = useState("");

  const filters = [{
    name : 'Brand',
    key : 'brand'
  }, {
    name : 'Type',
    key : 'type'
  }];

  const [selFilter, setSelFilter] = useState("");

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

  const searchCard = () => {
    return (
      <div className="pt-5">
        <div className="card ">
          <div className="card-header bg-white p-4">
            <div class="input-group rounded">
              <input
                style={{ border: "none", outline: "none" }}
                type="search"
                class="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                onChange={(e) => setKeyword(e.target.value)}
              />
              <span
                class="input-group-text border-0 bg-white"
                id="search-addon"
                onClick={applySearch}
              >
                <i class="fas fa-search"></i>
              </span>
            </div>
          </div>
          <div className="card-body p-4">
            <p className="text-muted">ADVANCED SEARCH</p>
            <div className="row">
              {filters.map((filter) => {
                return (
                  <>
                    <div className="col-sm-2">
                      <button
                        onClick={(e) => setSelFilter(filter)}
                        className={
                          "btn btn-" +
                          (filter.name === selFilter.name ? "" : "outline-") +
                          "primary"
                        }
                      >
                        {filter.name}
                      </button>
                    </div>
                    &nbsp; &nbsp;
                  </>
                 );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const applySearch = () => {
    fetch(url + "/equipment/getall").then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          let filtered = data.filter(equip => equip[selFilter.key].toLowerCase().includes(keyword.toLowerCase()))
          setEquipmentArray([...filtered]);
          setLoading(false);
        });
      }
    });
  };

  const displaySkeleton = () => {
    return [1, 2, 3, 4].map((e) => (
      <Grid item md={4}>
        <Skeleton
          animation="wave"
          variant="rectangular"
          height={250}
          width={200}
        />
        <Skeleton
          animation="wave"
          variant="text"
          classNameName="mt-3"
          width={50}
        />

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
          <div
            className="card"
            onClick={(e) => {
              navigate("/main/viewequipment/" + equipment._id);
            }}
          >
            <div
              className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
              data-mdb-ripple-color="light"
            >
              <div
                style={{
                  background:
                    "url(" + url + "/uploads/" + equipment.thumbnail + ")",
                  height: "300px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* <img src={url + "/uploads/" + equipment.thumbnail} 
                className="w-100" /> */}

              <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  {/* <h5><span className="badge bg-primary ms-2">New</span></h5> */}
                </div>
              </div>
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </div>
            </div>
            <div className="card-body">
              <h4>
                <span>
                  {equipment.brand} {equipment.model}
                   {equipment.specification}
                   {equipment.highlights} 

                </span>
              
                <span className="float-end">₹ {equipment.price}</span>
              </h4>
              {/* <span className="my-auto">4.3</span> */}
              <Rating value={5} />
              <h6 className="text-muted">653 Reviews</h6>
          
            </div>
          </div>
        </div>
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
    <div className="list1 container mt-2">
      {searchCard()}

      <div className="row mt-5" container spacing={4}>
        {displayEquipments()}
      </div>
    </div>
  );
};
export default ListEquipments;
