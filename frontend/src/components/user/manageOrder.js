import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import React, { useEffect, useState } from 'react'
import app_config from '../config'

const ManageOrder = () => {
    const url = app_config.api_url;
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    const [orderList, setOrderList] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = () => { 
        
        fetch(url+'/order/getbyuser/'+currentUser._id).then(res => {
            if(res.status == 200){
                res.json().then(data => {
                    console.log(data);
                    setOrderList(data);
                    setLoading(false);
                })
            }
        })
     }

     useEffect(() => {
       
        fetchData();

     }, [])

     const showData = () => {
         if(!loading){
             return orderList.map(order => (
                 <Accordion>
                     <AccordionSummary expandIcon={<ExpandMore />}>
                         {order.equipment.brand} &nbsp;&nbsp; {new Date(order.createdAt).toLocaleDateString()}
                     </AccordionSummary>
                     <AccordionDetails>
                     {order.equipment.price}
                     </AccordionDetails>
                 </Accordion>
             ))
         }
     }
     

  return (
    <div>
        <p className="display-4 mb-0">Manage Orders</p>
        <hr />
        {showData()}
    </div>
  )
}

export default ManageOrder