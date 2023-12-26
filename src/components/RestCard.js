import { FOOD_URL } from "../utilities/constants";
const RestCard = (props) =>{
    const {restName,cusines,imgId,rating}= props;
    return (
            <div className="w-64 h-64 bg-gray-100 hover:bg-slate-300 hover:border-gray-300  border rounded-md overflow-hidden">
                <img className="w-full h-32 object-cover"id="foodimg" src={FOOD_URL+imgId} alt="logo"></img>
                <div className=" mx-2 my-1">
                    <h3 className="font-bold">{restName}</h3>
                    <p><b>Cusines :</b> {cusines}</p>
                    <p ><span className="font-bold">Rating:</span> {rating}</p>
                </div>
            </div>
    );
}
export default RestCard;