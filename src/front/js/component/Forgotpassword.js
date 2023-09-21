import React, { useState } from 'react';
import { resetPassword } from "../../firebase.js";
import { useForm } from "../../hooks/useform";

const ForgotPassword = ({ onClose, email: initialEmail }) => {
    const [formData, handleInputChange, reset] = useForm({
        email: initialEmail || ""
    });
    const [message, setMessage] = useState(""); 
    const [error, setError] = useState(""); 

    const { email } = formData;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await resetPassword(email);
            alert("Email Sent")
            setMessage("");
            reset();
        } catch (error) {
            setError("Failed to reset password.");
            console.error(error.message);
        }
    };

    return (
        <div className="forgot-password-modal">
            <h3>Forgot Password</h3>
            {message && <div className="success-message">{message}</div>}
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                    />
                </div>
                <button type="submit">Send Link</button>
                <button onClick={onClose}>Close</button>
            </form>
        </div>
    );
}

export default ForgotPassword;
