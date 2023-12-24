import { useState, useEffect } from "react";
import {SWIGGY_Menu_API} from "./constants"

const useRestDetails = (resId)=>{

    const [restDetails, setRestDetails] = useState();
    const [restItems, setRestItems] = useState([]);
    const [filterItems, setFilterItems] = useState([]);

    useEffect(function(){
        fetchAPi(); // take note
    },[]);
    
    const fetchAPi = async()=>{ // take note
        try {
            const data = await fetch(SWIGGY_Menu_API + resId);
            const jsonData = await data.json();
            setRestDetails(jsonData.data.cards[0].card.card.info);
            const items = jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
            
            setFilterItems([...items]);
            setRestItems([...items]);
          } catch (error) {
            console.error("Error fetching menu data:", error);
          }
    }

    const vegFilter=()=>{
        setFilterItems(restItems.filter(x=>x.card.info.isVeg == 1));
    }
    const nonvegFilter=()=>{
        setFilterItems(restItems.filter(x=>x.card.info.isVeg != 1));
    }
    const clearFilter =()=>{setFilterItems(restItems)};

    return {restDetails, filterItems, vegFilter, nonvegFilter, clearFilter};
}

export default useRestDetails;