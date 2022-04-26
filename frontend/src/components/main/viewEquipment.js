import { useParams } from "react-router-dom";

const ViewEquipment = () =>{

    const {id} = useParams();

    

    return(
        <div>
            <h1>View your Equipment</h1>
        </div>
    )

}
export default ViewEquipment;