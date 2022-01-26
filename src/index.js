import React, { createContext, useState } from 'react';
import App from './App';
import { render } from "react-dom";

export const ActiveContext = createContext();

function ActiveProvider ({children}) {
    const [active, setActive] = useState(1);

    return(
        <ActiveContext.Provider value={{active, setActive}}>
            {children}
        </ActiveContext.Provider>
    );
}

render(
    <ActiveProvider>
        <App />
    </ActiveProvider>,
    document.getElementById("root")
);