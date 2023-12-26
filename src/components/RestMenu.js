
import { useParams } from "react-router-dom";
import ShimmerCard from "./ShimmerCard.js"
import useRestDetails from "../utilities/useRestDetails"

const RestMenu= ()=>{
    const {resId} = useParams();
    const {restDetails, filterItems,vegFilter,nonvegFilter,clearFilter} = useRestDetails(resId);
    return (
        typeof(restDetails) == 'undefined' || restDetails == null || typeof(filterItems) == 'undefined' || filterItems == null ?
         <ShimmerCard /> :
    <div className="flex justify-center">
        <div className="w-96 flex  justify-center items-center flex-col ">
            <h1 className="text-3xl">{restDetails.name}</h1>
            <h3 className=" text-xl mt-8 mb-4 h-8">Menu Items</h3>
            <div className="flex justify-center gap-4 mb-4 h-8">
                <button className="px-2 py-1 bg-rose-300 rounded-lg" onClick={vegFilter}>Veg</button> 
                <button className="px-2 py-1 bg-rose-300 rounded-lg" onClick={nonvegFilter}>Non veg</button>
                <button className="px-2 py-1 bg-rose-300 rounded-lg" onClick={clearFilter}>clear</button>
            </div>
            <div className="flex justify-center w-full">
                <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th>Items</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody class="text-center">
                {filterItems.map((item)=>
                    <tr>
                      <td className="p-2 text-left">{item.card.info.name}</td> 
                      <td className="p-2">₹{item.card.info.price/100}</td>
                    </tr>
                )}
                </tbody>
                </table>
            </div>
        </div>
    </div>);
}

export default RestMenu;