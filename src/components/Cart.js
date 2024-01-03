import { useDispatch, useSelector } from "react-redux";
import ItemContent from "./ItemContent"
import { clearCart } from "../utilities/cartSlice";
const Cart = ()=>{
    const cartItems = useSelector(s=>s.cart.items);
    const dispatch = useDispatch();
    const clearAllHandler = ()=>{
        
        dispatch(clearCart());
    }
    return (
        <div>
            <h1 className="text-center text-2xl">Cart</h1>
            <div class="text-center">
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 my-4 rounded" onClick={clearAllHandler}>
                Clear all
            </button>
            </div>
            {cartItems.map((item,index)=>
            <ItemContent 
                key = {index} 
                name = {item.name}
                price = {item.price}
                imageurl = {item.imageurl}
                />
            )}
        </div>)
}

export default Cart;