import { useState } from "react";
import ItemContent from "./ItemContent"

const ItemAccord = (props)=>{
    const {title, items, showIndexFlag, setShowIndex,index} = props;
    const expandAccord2 = ()=>{
        //this code is to set the value of show index to click item so that rest will not be shown in below map
        setShowIndex(index);
        if(showIndexFlag){
            setShowIndex(null);
        }
        /*
        if(flag){
            setShowIndex(index);
            setFlag(false);
        }
        else{
            setShowIndex(null);
            setFlag(true);
        }*/
    }

    return (
    <div>
        <div className="flex justify-between text-4xl">
            <h2 className="cursor-pointer text-2xl" onClick={expandAccord2} >{title}  ({items.length})</h2>
            {/*<span className="cursor-pointer" onClick={expandAccord}> {isExpanded.Symbol} </span>*/}
        </div>
    { //below code is to show only one item
        showIndexFlag && items.map((item)=>
    <ItemContent 
    key = {item.card.info.id} 
    name = {item.card.info.name}
    price = {item.card.info.price/100} 
    imageurl = {item.card.info.imageId}
    />)}
    </div>)
}

export default ItemAccord