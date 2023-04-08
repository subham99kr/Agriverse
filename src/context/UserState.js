import UserContext from "./UserContext";
import { useState } from "react";

const UserState = (props) => {
    const s1 = {
        name: "Harry", 
        email: "", 
        
    }
    const [state, useState] = useState(s1); 
    return (
        <UserContext.Provider>

        </UserContext.Provider>
    )
}