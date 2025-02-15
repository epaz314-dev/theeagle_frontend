import { createContext, useState } from "react";

export const IdConext = createContext();

const GetId = ({children})=>{
    const [detail,setDetail] = useState({});
    return (
        <IdConext.Provider value={{detail,setDetail}}>
            {children}
        </IdConext.Provider>
    )
}

export default GetId;