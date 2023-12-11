import RestCar from "./RestCard"
import { restList } from "../utilities/MockData";
const Body =()=>{
    return (
        <div className="body">
            <div className="search">
                <p>Search place holder</p>
                {/*this is how you can add comments in JSX, as JS commentsin {}*/}
            </div>
            <div className="res-container">
               {
                    restList.map(function(restaurant){
                        return  <RestCar key={restaurant.info.id} restName={restaurant.info.name} cusines={(restaurant.info.cuisines).join(", ")} imgId ={restaurant.info.cloudinaryImageId} />
                    })
                }
            </div>
        </div>
        
    );
}

export default Body;