import RestCar from "./RestCard"
import { useEffect, useState } from "react";
import {SWIGGY_API} from "../utilities/constants"
import ShimmerCard from "./ShimmerCard"


const Body =()=>{
    let [listOfRest, setListOfRest] = useState([]);
    useEffect(()=>{getList();},[]);
    const getList = async()=>{
        let  response =await fetch(SWIGGY_API);
        let restList = await response.json();
        setListOfRest(restList.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
    }
    
    return (
        (listOfRest.length===0)?
        <ShimmerCard/>:
        <div className="body">
            <div className="search">
                <button onClick={
                    function(){
                        let newList = listOfRest.filter((res)=>res.info.avgRating>4.2);
                        setListOfRest(newList);
                    }
                }>Top Restaurant</button>
            </div>
            <div className="res-container">
               {
                listOfRest.map(function(restaurant){
                        return  <RestCar 
                        key={restaurant.info.id} 
                        rating={restaurant.info.avgRating} 
                        restName={restaurant.info.name} 
                        cusines={(restaurant.info.cuisines).join(", ")} 
                        imgId ={restaurant.info.cloudinaryImageId} />
                    })
                }
            </div>
        </div>
    );
}

export default Body;