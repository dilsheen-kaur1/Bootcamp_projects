import { createContext, useState } from "react";

// const NewContext = createContext();

const LanguageContext = createContext({
    counter: 0,
    setCounter: () => {}
  });

// export const NewProvider = ({children})=>{
//     const [counter, setCounter] = useState(2)

//     return(
//         <NewContext.Provider value={{counter,setCounter}}> 
//             {children}
//         </NewContext.Provider>
//     )
// }
// export default NewContext

export default LanguageContext



