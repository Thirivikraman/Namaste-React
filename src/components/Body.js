import RestCar from "./RestCard"
import { useEffect, useState } from "react";
import {SWIGGY_API} from "../utilities/constants"
import ShimmerCard from "./ShimmerCard"
import { Link } from "react-router-dom";
//import {restList} from "../utilities/MockData"

const Body =()=>{
    const [listOfRest, setListOfRest] = useState([]);
    //const [listOfRest, setListOfRest] = useState(restList);
    const [filterListOfRest, setFilterListOfRest] = useState(listOfRest);
    const [searchValue,setSearchValue] = useState("");
    const getList = async()=>{
        let  response =await fetch(SWIGGY_API);
        let restList = await response.json();
        return restList;
    }
useEffect(()=>{
        getList().then((rest)=>{
                setListOfRest(rest.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
                setFilterListOfRest(rest.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
            });
        ;},[]);
    
    return (
        (listOfRest == null ||listOfRest == undefined || listOfRest.length==0)?
        <ShimmerCard/>:
        <div className="body">
            <div className="Search">
                <input name="Search" value={searchValue} onChange={(e)=>{
                    console.log(e);
                    setSearchValue(e.target.value);
                }}></input>
                <button onClick={()=>{
                    let filtered = listOfRest.filter((res)=>res.info.name.toLowerCase().includes(searchValue.toLowerCase()));
                    setFilterListOfRest(filtered);
                }}>Search</button>
            </div>
            <div className="filter">
                <button onClick={
                    function(){
                        let newList = filterListOfRest.filter((res)=>res.info.avgRating>4.2);
                        setFilterListOfRest(newList);
                    }
                }>Top Restaurant</button>
            </div>
            <div className="res-container">
               {
                filterListOfRest.map(function(restaurant){
                        return <li><Link to={"/restaurant/"+restaurant.id}><RestCar
                        key={restaurant.info.id} 
                        rating={restaurant.info.avgRating} 
                        restName={restaurant.info.name} 
                        cusines={(restaurant.info.cuisines).join(", ")} 
                        imgId ={restaurant.info.cloudinaryImageId} /></Link></li>
                    })
                }
            </div>
        </div>
    );
}

export default Body;