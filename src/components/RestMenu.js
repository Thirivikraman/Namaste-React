
import { useParams } from "react-router-dom";
import ShimmerCard from "./ShimmerCard.js"
import useRestDetails from "../utilities/useRestDetails"
import ItemAccord from "./ItemAccord.js";
import { useState } from "react";
const RestMenu= ()=>{
    const {resId} = useParams();
    const {restDetails, filterItems,vegFilter,nonvegFilter,clearFilter, itemCategory} = useRestDetails(resId);
    //lifting up the state
    const [showIndex, setShowIndex] = useState(null);

    return (
        typeof(restDetails) == 'undefined' || restDetails == null || typeof(filterItems) == 'undefined' || filterItems == null ?
         <ShimmerCard /> :
    <div className="flex justify-center">
        <div className="w-6/12 flex  justify-center items-center flex-col ">
            <h1 className="text-3xl">{restDetails.name}</h1>
            <h3 className=" text-xl mt-8 mb-4 h-8">Menu Items</h3>
            <div className="flex justify-center gap-4 mb-4 h-8">
                <button className="px-2 py-1 bg-rose-300 rounded-lg cursor-auto" onClick={vegFilter}>Veg</button> 
                <button className="px-2 py-1 bg-rose-300 rounded-lg cursor-pointer" onClick={nonvegFilter}>Non veg</button>
                <button className="px-2 py-1 bg-rose-300 rounded-lg cursor-pointer" onClick={clearFilter}>clear</button>
            </div>
            <div>
                {itemCategory.map((item,index)=> {
                    console.log("Title" + item?.card?.card?.title + " , Itemcards" + item?.card?.card?.itemCards);
                    return(
                        <ItemAccord 
                        key={item?.card?.card?.title} 
                        title= {item?.card?.card?.title} 
                        items= {item?.card?.card?.itemCards}
                        showIndexFlag = {showIndex == index}
                        setShowIndex = {setShowIndex}
                        index = {index}
                        />
                        )
                    })}
            </div>
            
        </div>
    </div>);
}

export default RestMenu;