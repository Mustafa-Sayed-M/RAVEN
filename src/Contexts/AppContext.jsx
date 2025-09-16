import React from "react";

const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {

    const [navbarMenuIsOpen, setNavbarMenuIsOpen] = React.useState(false);

    return (
        <AppContext.Provider
            value={{
                navbarMenuIsOpen, setNavbarMenuIsOpen
            }}
        >
            {children}
        </AppContext.Provider>
    )
};

export const useApp = () => React.useContext(AppContext);