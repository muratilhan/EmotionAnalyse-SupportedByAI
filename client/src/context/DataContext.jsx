import { createContext, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = ({children}) => {

    const [sumRes, setSumRes] = useState(0)
    const [response, setResponse] = useState()
    const [selectedTitle, setSelectedTitle] = useState()

    return <DataContext.Provider value={{sumRes, setSumRes, response,setResponse, selectedTitle, setSelectedTitle}}>
        {children}
    </DataContext.Provider>
}

export default DataContextProvider