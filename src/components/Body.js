import RestCar from "./RestCard"
import { restList } from "../utilities/MockData";
import { useState } from "react";



const Body =()=>{
    let [listOfRest, setListOfRest] = useState(restList);
    return (
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