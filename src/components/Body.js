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
        <div className=" w-full bg-orange-100">
            <div className="flex ml-12 items-center justify-center">
                <div className=" my-4">
                    <input className= "border rounded-md border-solid h-8 w-96"name="Search" value={searchValue} onChange={(e)=>{
                        setSearchValue(e.target.value);
                    }}></input>
                    <button className="ml-4 bg-lime-300 hover:bg-lime-400 py-1 px-2 rounded-sm" onClick={search}>Search</button>
                </div>
                <div className="ml-4 my-4 w-auto bg-rose-300 hover:bg-rose-400 py-1 px-2 rounded-sm">
                    <button onClick={topRest}>Top Restaurant</button>
                </div>
            </div>
            <div className="flex flex-wrap gap-8 mx-12 my-8">
               {
                filterListOfRest.map(function(restaurant){
                        return <li className="list-none"><Link to={"/restaurant/"+restaurant.info.id}><RestCar
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