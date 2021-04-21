import React, {useState, createContext} from 'react';



//create context
export const GlobalContext = createContext();

//create provider
export const GlobalProvider = ({children}) => {
const [query, setQuery]= useState('potato');

return (
<GlobalContext.Provider value={[query, setQuery]}>
{children}
</GlobalContext.Provider>
)
}