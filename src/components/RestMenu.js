
import { useParams } from "react-router-dom";
import ShimmerCard from "./ShimmerCard.js"
import useRestDetails from "../utilities/useRestDetails"

const RestMenu= ()=>{
    console.log("Rest menu render");
    const {resId} = useParams();
    const {restDetails, filterItems,vegFilter,nonvegFilter,clearFilter} = useRestDetails(resId);
    return (
        typeof(restDetails) == 'undefined' || restDetails == null || typeof(filterItems) == 'undefined' || filterItems == null ?
         <ShimmerCard /> :
    <div>
        <h1>Restaurant Name : {restDetails.name}</h1>
        <h3>Menu Items</h3>
        <button onClick={vegFilter}>Veg</button> 
        <button onClick={nonvegFilter}>Non veg</button>
        <button onClick={clearFilter}>clear</button>
        {filterItems.map((item)=>
            <p>{item.card.info.name} - ${item.card.info.price/100}</p>
        )}
    </div>);
}

export default RestMenu;