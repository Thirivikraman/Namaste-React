import { useDispatch } from "react-redux";
import {FOOD_URL_Items} from "../utilities/constants"
import { addItem } from "../utilities/cartSlice";

const ItemContent = (props)=>{
    const dispatch = useDispatch();
    const addHandler = (props)=>{
        dispatch(addItem(props));
    }
    const {name, price, imageurl} = props;
    return (
    <div className="flex justify-between content-center w-auto border-b-2 m-4 p-4">
        <div>
            <h1>{name}</h1>
            <h2>₹ {price}</h2>
        </div>
    <div className="flex flex-col justify-center gap-2">
        <div className="w-10 h-10">
            <img className="object-cover" src={FOOD_URL_Items+imageurl}></img>
        </div>
        <div className="float-left">
        <button className="bg-slate-500 text-slate-50 rounded-md px-2 py-0 cursor-pointer"
        onClick={()=>addHandler(props)}
        >Add +</button>
        </div>
    </div>
        
    </div>);
}

export default ItemContent;