import React from "react";
import { useForm } from "../../hooks/useform";
import { Link } from "react-router-dom";


export const Signup = () => {

    const [inputValues, handleInputChange] = useForm({
        Firstname: "",
        lastname: "",
        Address: "",
        email: "",
        Phonenumber: "",
        password: "",
        password2: ""
    })

    const { Firstname, lastname, Address, email, Phonenumber, password, password2 } = inputValues;

    const createUserRequest = async (Firstname, lastname, Address, email, Phonenumber, password) => {
        try {
            const response = await fetch("http://localhost:3001/signup", {
                method: "POST",
                body: JSON.stringify({
                    Firstname: Firstname,
                    last_name: lastname,
                    Address: Address,
                    email: email,
                    Phonenumber: Phonenumber,
                    password: password
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
    
            const data = await response.json();
    
            if (response.status === 201) {
                alert("User registered successfully!");
            } else {
                console.error(data.msg);
                alert("Registration failed: " + data.msg);
            }
        } catch (error) {
            console.error("Error registering user:", error);
            alert("Error during registration. Please try again.");
        }
    };
    

    return (
        <>
            <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" name="Firstname" id="form3Example1c" className="form-control" value={Firstname} onChange={handleInputChange} />
                                                        <label className="form-label" for="form3Example1c">First Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" name="lastname" id="form3Example1c" className="form-control" value={lastname} onChange={handleInputChange} />
                                                        <label className="form-label" for="form3Example1c">Last Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" name="Address" id="form3Example1c" className="form-control" value={Address} onChange={handleInputChange} />
                                                        <label className="form-label" for="form3Example1c">Address</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row justify-content-center align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" name="Phonenumber" id="form3Example1c" className="form-control" value={Phonenumber} onChange={handleInputChange} />
                                                        <label className="form-label" for="form3Example1c">Phone number</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" name="email" id="form3Example3c" className="form-control" value={email} onChange={handleInputChange} />
                                                        <label className="form-label" for="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" name="password" id="form3Example4c" className="form-control" value={password} onChange={handleInputChange} />
                                                        <label className="form-label" for="form3Example4c">Password</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" name="password2" id="form3Example4cd" className="form-control" value={password2} onChange={handleInputChange} />
                                                        <label className="form-label" for="form3Example4cd">Repeat your password</label>
                                                    </div>
                                                </div>
                                                <Link to="/login">
                                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                        <button type="button" className="btn btn-primary btn-lg" onClick={createUserRequest}>Register</button>
                                                    </div>
                                                </Link>

                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://cdn.pixabay.com/photo/2017/09/12/11/56/universe-2742113_1280.jpg"
                                                className="img-fluid" alt="Sample image" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )



}