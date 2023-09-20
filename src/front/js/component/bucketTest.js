import React, { useRef, useState } from "react";
import "../../styles/buckettest.css";
import { signup, login, logout, useAuth } from "../../../../src/firebase.js";

export const BucketTest = () => {
    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSignup() {
        setLoading(true);
        //try {
        await signup(emailRef.current.value, passwordRef.current.value);
        //} catch {
        //alert("User already exists!");
        //}
        setLoading(false);
    }
    async function handleLogin() {
        setLoading(true);
        try {
            await login(emailRef.current.value, passwordRef.current.value);
        } catch {
            alert("User already exists!");
        }
        setLoading(false);
    }

    async function handleLogout() {
        setLoading(true);
        try {
            await logout();
        } catch {
            alert("Error!");
        }
        setLoading(false);

    }

    return (
        <div id="main">

            <div className="login-proof">Currently logged in as: {currentUser?.email} </div>

            {!currentUser &&
                <>
                    <div id="fields">
                        <input ref={emailRef} placeholder="Email" />
                        <input ref={passwordRef} type="password" placeholder="Password" />
                    </div>

                    <button disabled={ loading } onClick={handleSignup}>Sign Up</button>
                    <button disabled={ loading } onClick={handleLogin}>Log In</button>
                </>
            }

            {currentUser && <><button disabled={loading || !currentUser} onClick={handleLogout}>Log Out</button></>}
            
        </div>
    );
}