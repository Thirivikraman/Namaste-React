import RestCar from "./RestCard"
import useRestCards from "../utilities/useRestCards"
import ShimmerCard from "./ShimmerCard"
import { Link } from "react-router-dom";


const Body =()=>{
    
    const {
        listOfRest,
        filterListOfRest,
        searchValue,
        search,
        topRest
    } = useRestCards();
    
    return (
        (listOfRest == null ||listOfRest == undefined || listOfRest.length==0)?
        <ShimmerCard/>:
        <div className="body">
            <div className="Search">
                <input name="Search" value={searchValue} onChange={(e)=>{
                    console.log(e);
                    setSearchValue(e.target.value);
                }}></input>
                <button onClick={search}>Search</button>
            </div>
            <div className="filter">
                <button onClick={topRest}>Top Restaurant</button>
            </div>
            <div className="res-container">
               {
                filterListOfRest.map(function(restaurant){
                        return <li><Link to={"/restaurant/"+restaurant.info.id}><RestCar
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