// import React, { createContext, useState, useContext } from 'react';

// const SidebarContext = createContext();

// export const useSidebar = ()=> useContext(SidebarContext);

// export const SidebarProvider = ({children})=>{
//     const [sidebar , setSidebar] = useState('default');
//     return (
//         <SidebarContext.Provider value={{sidebar,setSidebar}}>
//             {children}
//         </SidebarContext.Provider>
//     )
// }