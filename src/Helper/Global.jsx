import { createContext } from "react";
export const GlobalContext = createContext()

export function GlobalProvider({children}){
    const getAllUsers = () => {
        const users = {};
        Object.keys(localStorage).forEach((key) => {
          if (key.includes('@')) { // Assuming all keys with an '@' are emails
            users[key] = JSON.parse(localStorage.getItem(key));
          }
        });
        return users;
      };
    
      const SignUpValues = getAllUsers();

      function capitalizeFirstLetter(string) {
        if (!string) return ''; // Return an empty string if input is empty or undefined
        
        
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
      }

      const contextObject = {
        SignUpValues,
        capitalizeFirstLetter,
    }
    return (
        <GlobalContext.Provider value={contextObject}>
            {children}
       
        </GlobalContext.Provider>
      );
}