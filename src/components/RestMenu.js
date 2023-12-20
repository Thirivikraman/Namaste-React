import { useEffect, useState } from "react";
import {SWIGGY_Menu_API} from "../utilities/constants"
import { useParams } from "react-router-dom";
import ShimmerCard from "./ShimmerCard.js"

const RestMenu= ()=>{
    const {resId} = useParams();
    const [restDetails, setRestDetails] = useState();
    const [restItems, setRestItems] = useState([]);
    useEffect(async function(){
        const data = await fetch(SWIGGY_Menu_API + resId);
        const jsonData = await data.json();
        setRestDetails(jsonData.data.cards[0].card.card.info);
        setRestItems(jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
    },[]);
    
    return (
    (restDetails == null ||restDetails == undefined)?
    <ShimmerCard/>:

    <div>
        <h1>Restaurant Name : {restDetails.name}</h1>
        <h3>Menu Items</h3>
        {restItems.map((item)=>
            <p>{item.card.info.name} - ${item.card.info.price/100}</p>
        )}
    </div>);
}

export default RestMenu;