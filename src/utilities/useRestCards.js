import { useEffect, useState } from "react";
import {SWIGGY_API} from "../utilities/constants";

const useRestCards = ()=>{
    const [listOfRest, setListOfRest] = useState([]);
    const [filterListOfRest, setFilterListOfRest] = useState(listOfRest);
    const [searchValue,setSearchValue] = useState("");
    //add description
    useEffect(()=>{
        fetchAPi();
    },[]);

    const fetchAPi = async()=>{
                    let  response =await fetch(SWIGGY_API);
                    let restList = await response.json();
                    setListOfRest(restList?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                    setFilterListOfRest(restList?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const search =()=>{
        let filtered = listOfRest.filter((res)=>res.info.name.toLowerCase().includes(searchValue.toLowerCase()));
        setFilterListOfRest(filtered);
    }
    const searchChange = (e)=>{
        setSearchValue(e.target.value);}

    const topRest = function(){
        let newList = listOfRest.filter((res)=>res.info.avgRating>4.2);
        setFilterListOfRest(newList);
    }

    return {listOfRest,filterListOfRest,searchValue,search,topRest,searchChange};
}

export default useRestCards