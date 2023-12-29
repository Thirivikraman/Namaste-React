import { useState, useEffect } from "react";
import {SWIGGY_Menu_API} from "./constants"

const useRestDetails = (resId)=>{

    const [restDetails, setRestDetails] = useState();
    const [restItems, setRestItems] = useState([]);
    const [filterItems, setFilterItems] = useState([]);

    const [itemCategory, setItemCategories] = useState([]);

    useEffect(function(){
        fetchAPi();
    },[]);
    
    const fetchAPi = async()=>{
        try {
            const data = await fetch(SWIGGY_Menu_API + resId);
            const jsonData = await data.json();
            setRestDetails(jsonData.data.cards[0].card.card.info);

            const items = jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
            const itemCategories = jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((c)=>c?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
            console.log(itemCategories);
            setItemCategories(itemCategories);
            //setFilterItems([...items]);
            //setRestItems([...items]);
          } catch (error) {
            console.error("Error fetching menu data:", error);
          }
    }

    const vegFilter=()=>{
        //setFilterItems(restItems.filter(x=>x.card.info.isVeg == 1));
    }
    const nonvegFilter=()=>{
        //setFilterItems(restItems.filter(x=>x.card.info.isVeg != 1));
    }
    const clearFilter =()=>{
        //setFilterItems(restItems);
    }

    return {restDetails, filterItems, vegFilter, nonvegFilter, clearFilter, itemCategory};
}

export default useRestDetails;