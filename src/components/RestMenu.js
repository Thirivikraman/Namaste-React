import { useEffect, useState } from "react";
import {SWIGGY_Menu_API} from "../utilities/constants"
import { useParams } from "react-router-dom";
import ShimmerCard from "./ShimmerCard.js"

const RestMenu= ()=>{
    const {resId} = useParams(); // take note
    const [restDetails, setRestDetails] = useState();
    const [restItems, setRestItems] = useState([]);
    const [filterItems, setFilterItemsItems] = useState([]);

    useEffect(function(){
        fetchAPi(); // take note
    },[]);
    
    const fetchAPi = async()=>{ // take note
        const data = await fetch(SWIGGY_Menu_API + resId);
        const jsonData = await data.json();
        setRestDetails(jsonData.data.cards[0].card.card.info);
        setRestItems(jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
        setFilterItemsItems(jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
    }

    const vegFilter=()=>{
        setFilterItemsItems(restItems.filter(x=>x.card.info.isVeg == 1));
    }
    const nonvegFilter=()=>{
        setFilterItemsItems(restItems.filter(x=>x.card.info.isVeg != 1));
    }
    const clearFilter =()=>{setFilterItemsItems(restItems)};
    return (
    (restDetails == null ||restDetails == undefined || filterItems == null ||filterItems == undefined )?
    <ShimmerCard/>:

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