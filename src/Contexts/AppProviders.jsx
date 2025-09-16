import { AppContextProvider } from "./AppContext";

function AppProviders({ children }) {
    return (
        <div className="app-providers">
            <AppContextProvider>
                {children}
            </AppContextProvider>
        </div>
    )
}

export default AppProviders;