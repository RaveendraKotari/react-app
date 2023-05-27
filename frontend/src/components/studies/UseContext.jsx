import React, { createContext } from 'react';
const AppContext = createContext(null);

export const UseContext = () => {

    const [username, setUsername] = React.useState("");
    const store = { username, setUsername };
    return (
        <>
            <AppContext.Provider value={store}>
                <div>UseContext</div>
                <Login/>
                <Username />
            </AppContext.Provider>
        </>
    )
}

const Login = () => {
    const { setUsername } = React.useContext(AppContext);
    return (
        <div>
            <input onChange={(e) => {
                setUsername(e.target.value);
            }} />
        </div>
    )
}

const Username = () => {
    const { username } = React.useContext(AppContext);
    return (
        <div>
            User: {username}
        </div>
    )
}
