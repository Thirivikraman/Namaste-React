import RestCard, {withPromtedLabel} from "./RestCard"
import useRestCards from "../utilities/useRestCards"
import ShimmerCard from "./ShimmerCard"
import { Link } from "react-router-dom"; 
import { useContext, useState } from "react";
import UserContext from "../utilities/UserContext";

const Body =()=>{
    
    const {
        listOfRest,
        filterListOfRest,
        searchValue,
        search,
        topRest,
        searchChange
    } = useRestCards();

    const RestCardWithPromoted = withPromtedLabel(RestCard);

    const {loggedInUser, SetNameContext} = useContext(UserContext);
    const [flag, setFlag] = useState(true);
    const setUser = ()=>{
        flag? SetNameContext({loggedInUser:"Thirivikraman"}): SetNameContext({loggedInUser:"Vikram"});
        setFlag(!flag);
    }
    return (
        (listOfRest == null ||listOfRest == undefined || listOfRest.length==0)?
        <ShimmerCard/>:
        <div className=" w-full bg-orange-100">
            <div className="flex ml-12 items-center justify-center">
            {console.log({loggedInUser})}
            
                <div className=" my-4">
                    <input className= "border rounded-md border-solid h-8 w-96"name="Search" value={searchValue} onChange={searchChange}></input>
                    <button className="ml-4 bg-lime-300 hover:bg-lime-400 py-1 px-2 rounded-sm" onClick={search}>Search</button>
                </div>
                <div className="ml-4 my-4 w-auto bg-rose-300 hover:bg-rose-400 py-1 px-2 rounded-sm">
                    <button onClick={topRest}>Top Restaurant</button>
                </div>
                <div className="ml-4 my-4 w-auto bg-blue-300 hover:bg-blue-400 py-1 px-2 rounded-sm">
                    <button onClick={setUser}>Click to change User</button>
                </div>
                <h2 className="ml-4 my-4 text-2xl">{loggedInUser}</h2>
                
            </div>
            <div className="flex flex-wrap gap-8 mx-12 my-8">
               {
                filterListOfRest.map(function(restaurant){
                        return (<li className="list-none">
                        <Link to={"/restaurant/"+restaurant.info.id}>
                        {
                            restaurant.info.avgRating > 4? 
                            <RestCardWithPromoted
                            key={restaurant.info.id}
                            rating={restaurant.info.avgRating} 
                            restName={restaurant.info.name} 
                            cusines={(restaurant.info.cuisines).join(", ")} 
                            imgId ={restaurant.info.cloudinaryImageId} />: 
                            <RestCard
                            key={restaurant.info.id}
                            rating={restaurant.info.avgRating} 
                            restName={restaurant.info.name} 
                            cusines={(restaurant.info.cuisines).join(", ")} 
                            imgId ={restaurant.info.cloudinaryImageId} />
                        } 
                        </Link>
                        </li>)
                    })
                }
            </div>
        </div>
    );
}

export default Body;