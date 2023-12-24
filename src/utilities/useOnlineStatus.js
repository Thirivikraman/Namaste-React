import { useEffect, useState } from "react";

const useOnlineStatus = () =>{
    const[status, setStatus] = useState("online");
    window.addEventListener("offline", ()=>{setStatus("offline")});
    window.addEventListener("online", ()=>{setStatus("online")});
    return status;
}

export default useOnlineStatus;