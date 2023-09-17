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
                    const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email: email,
                            password: password
                        }),
                    });
            
                    const data = await resp.json();
                    
                    if (!resp.ok) {
                        throw new Error(data.msg);
                    }
            
                    setStore({
                        user: data.user,
                        token: data.token
                    });
                    
                    return resp;
            
                } catch (error) {
                    console.log("Error during login:", error);
                    return error;
                }
            },
        

            logout: () => {
                setStore({
                    user: null,
                    token: null
                });
            },

            signup: async (email, password) => {
                try {
                    const resp = await fetch(process.env.BACKEND_URL + "/api/signup", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email: email,
                            password: password
                        }),
                    });

                    if (!resp.ok) {
                        const data = await resp.json();
                        throw new Error(data.msg);
                    }

                    const data = await resp.json();
                    setStore({
                        user: data.user,
                        token: data.token
                    });
                } catch (error) {
                    console.log("Error during signup:", error);
                    alert(error.message);
                }
            }
        }
    };
};

export default getState;
