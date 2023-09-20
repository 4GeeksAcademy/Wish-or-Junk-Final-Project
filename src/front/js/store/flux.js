import { signup, login, logout, useAuth } from "../../firebase.js";

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            message: null,
            demo: [
                {
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
            user: null,
            token: null
        },
        actions: {
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            getMessage: async () => {
                try {
                    const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
                    const data = await resp.json();
                    setStore({ message: data.message });
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },

            changeColor: (index, color) => {
                const store = getStore();
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });
                setStore({ demo: demo });
            },

            login: async (email, password) => {
                try {
                    await login(email, password); // From Firebase logic
                    const user = useAuth(); // get the currently logged in user
                    setStore({
                        user: user,
                        token: user ? user.uid : null // using the user UID as a token for simplicity
                    });
                    return true; // or any other success indication
                    
                } catch (error) {
                    console.log("Error during login:", error);
                    return error;
                }
            },

            logout: async () => {
                try {
                    await logout(); // From Firebase logic
                    setStore({
                        user: null,
                        token: null
                    });
                    return true; // or any other success indication
                    
                } catch (error) {
                    console.log("Error during logout:", error);
                    return error;
                }
            },

            signup: async (email, password) => {
                try {
                    await signup(email, password); // From Firebase logic
                    const user = useAuth(); // get the currently logged in user
                    setStore({
                        user: user,
                        token: user ? user.uid : null // using the user UID as a token for simplicity
                    });
                    return true; // or any other success indication
                    
                } catch (error) {
                    console.log("Error during signup:", error);
                    return error;
                }
            },
        }
    };
};

export default getState;
