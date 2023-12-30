import {createContext} from 'react';

const UserContext = createContext({
    loggedInUser: "Default",
    setContent: ()=>{},
});

export default UserContext;