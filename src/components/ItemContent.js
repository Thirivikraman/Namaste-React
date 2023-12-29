import {FOOD_URL_Items} from "../utilities/constants"

const ItemContent = (props)=>{
    const {name, price, imageurl} = props;
    return (
    <div className="flex justify-between w-full border-b-2 m-4 p-4">
        <div>
            <h1>{name}</h1>
            <h2>₹ {price}</h2>
        </div>
        <div className="w-10 h-10">
            <img className="object-cover" src={FOOD_URL_Items+imageurl}></img>
        </div>
    </div>);
}

export default ItemContent;