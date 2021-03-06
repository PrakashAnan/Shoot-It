import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Paper,
  Grid,
  Card,
  Drawer,
} from "@mui/material";
import { useEffect, useState } from "react";
import app_config from "../config";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UpdateEquipment from "./updateEquipment";

const ManageEquipment = () => {
  const [productArray, setProductArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [updateFormData, setUpdateFormData] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const [drawerOpen, setDrawerOpen] = useState(false);

  // URL link
  const url = app_config.api_url;

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen({ ...drawerOpen, [anchor]: open });
  };

  const fetchData = () => {
    fetch(url + "/equipment/getall", {
      method: "GET",
      // data hmko send ni krna hai isliye get method use karte hai
    })
      .then((res) => res.json())
      // res se json nikalne k liye
      .then((data) => {
        // dusra then jo hai json data read krne k liye
        console.log(data);
        setProductArray(data);
        setLoading(false);
        // data print krwa rhe hai
      });
  };

  const deleteEquipment = (id) => {
    fetch(url + "/equipment/delete/" + id, { method: "DELETE" })
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
        fetchData();
        toast.success("product deleted successfully...", {
          icon: "😁",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  const updateEquipment = (formdata) => {
    setUpdateFormData(formdata);
    setShowUpdateForm(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayProducts = () => {
    if (!loading) {
      return productArray.map((equipment) => (
        <div className="container mt-2">
          <Accordion>
            <AccordionSummary>
              <h1>{equipment.type}</h1>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                <Grid item md={6}>
                  <ul class="list-group">
                    <li class="list-group-item">
                      EquipmentTitle:{equipment.title}
                    </li>
                    <li class="list-group-item">Price::{equipment.price}</li>
                    <li class="list-group-item">
                      Rent Price::{equipment.rentprice}
                    </li>
                    <li class="list-group-item">Model::{equipment.model}</li>
                    <li class="list-group-item">Brand::{equipment.brand}</li>
                    <li class="list-group-item">Type::{equipment.type}</li>
                    <li class="list-group-item">
                      Rentable::{equipment.rentable}
                    </li>
                  </ul>
                </Grid>
                <Grid item md={6}>
                  <Paper>
                    <Card>
                      <div className="check mt-2">
                        <Button
                          variant="outlined"
                          color="success"
                          onClick={(e) => navigate("/admin/addequipment")}
                          className="w-100"
                        >
                          Add item
                        </Button>

                        <Button
                          variant="outlined"
                          color="success"
                          onClick={(e) => updateEquipment(equipment)}
                          className="w-100"
                        >
                          update
                        </Button>

                        <Button
                          variant="outlined"
                          color="success"
                          className="w-100 mt-3"
                          onClick={(e) => deleteEquipment(equipment._id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </Card>
                  </Paper>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </div>
      ));
    }
  };
  return (
    <div>
      {displayProducts()}

      <Drawer
        anchor="right"
        open={showUpdateForm}
        onClose={(e) => setShowUpdateForm(false)}
        sx={{
          width: { sm: `calc(100% - ${300}px)` },
          ml: { sm: `${300}px` },
        }}
      >
        {showUpdateForm ? (
          <UpdateEquipment
            equipmentdetail={updateFormData}
            fetchEquipments={fetchData}
            setShowForm={setShowUpdateForm}
          />
        ) : (
          ""
        )}
      </Drawer>
    </div>
  );
};

export default ManageEquipment;
