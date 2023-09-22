import React from "react";
import "../../styles/aboutus.css";
import Navbar from '../component/navbar';
import { Footer } from "../component/footer";

export const AboutUs = () => {


    return (
        <div className="wrapper">
            <Navbar />
            <div className="about-us-container">
                <header><h1><strong>About Us</strong></h1></header>
                <main>
                    <section className="mission-section">
                        <h2><strong>Our Mission</strong></h2>
                        <p>
                            We stand committed to excellence in research & development, integrity of character, and respect for those who have committed their lives to the same values before us. Through innovation, collaboration, and the relentless pursuit of knowledge, we strive to inspire, educate, and propel future generations to reach for the stars.
                        </p>
                    </section>
                    <section className="team-section">
                        <div className="meet-team-title-container">
                            <h2><strong>Meet Our Team</strong></h2>
                        </div>
                        <div className="team-member">
                            <div className="tm-1">
                                <img src="https://halo.wiki.gallery/images/b/bd/H2A_-_Hood.png" alt="Astronaut 1" />
                                <h3>Cody Ross</h3>
                                <div className="tm-1">
                                    <p>General U.S. Space Force</p>
                                    <div className="socialmedia-icons">
                                        <a href="https://www.facebook.com/" target="blank" rel="FB placeholder" />
                                        <i className="fab fa-facebook" />
                                        <a href="https://www.twitter.com/" target="blank" rel="Twitter placeholder" />
                                        <i className="fab fa-twitter" />
                                        <a href="https://www.linkedin.com/" target="blank" rel="Linkedin placeholder" />
                                        <i className="fab fa-linkedin" />
                                    </div>
                                </div>
                            </div>
                            <div className="tm-2">
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/85/Spark-Halo3.png/220px-Spark-Halo3.png" alt="Member 2" />
                                <h3>Robert Bartlett</h3>
                                <div className="tm-2">
                                    <p>Director of Space Exploration Technologies & Research</p>
                                    <div className="socialmedia-icons">
                                        <a href="https://www.facebook.com/" target="blank" rel="FB placeholder" />
                                        <i className="fab fa-facebook" />
                                        <a href="https://www.twitter.com/" target="blank" rel="Twitter placeholder" />
                                        <i className="fab fa-twitter" />
                                        <a href="https://www.linkedin.com/" target="blank" rel="Linkedin placeholder" />
                                        <i className="fab fa-linkedin" />
                                    </div>
                                </div>
                            </div>
                            <div className="tm-3">
                                <img src="https://static.tvtropes.org/pmwiki/pub/images/773780e436fde5d5ea5f110f5d84cce6.jpg" alt="Member 3" />
                                <h3>Hyunsung Oh</h3>
                                <div className="tm-3">
                                    <p>Senior Research Scientist</p>
                                    <div className="socialmedia-icons">
                                        <a href="https://www.facebook.com/" target="blank" rel="FB placeholder" />
                                        <i className="fab fa-facebook" />
                                        <a href="https://www.twitter.com/" target="blank" rel="Twitter placeholder" />
                                        <i className="fab fa-twitter" />
                                        <a href="https://www.linkedin.com/" target="blank" rel="Linkedin placeholder" />
                                        <i className="fab fa-linkedin" />
                                    </div>
                                </div>
                            </div>
                            <div className="tm-4">
                                <img src="https://images.squarespace-cdn.com/content/v1/58e1668c2e69cfd46ac3028a/1609703354096-Q09SMU5LR87NQR05ZTI4/lasky+rounded.png?format=500w" alt="Member 4" />
                                <h3>Brendan</h3>
                                <div className="tm-4">
                                    <p>Senior Exploratory Scientist</p>
                                    <div className="socialmedia-icons">
                                        <a href="https://www.facebook.com/" target="blank" rel="FB placeholder" />
                                        <i className="fab fa-facebook" />
                                        <a href="https://www.twitter.com/" target="blank" rel="Twitter placeholder" />
                                        <i className="fab fa-twitter" />
                                        <a href="https://www.linkedin.com/" target="blank" rel="Linkedin placeholder" />
                                        <i className="fab fa-linkedin" />
                                    </div>
                                </div>
                            </div>
                            <div className="tm-5">
                                <img src="https://halo.wiki.gallery/images/c/c6/The_Rookie_Infobox_%28Cropped%29.png" alt="Member 5" />
                                <h3>Randy Beltran</h3>
                                <div className="tm-5">
                                    <p>Lab Technician</p>
                                    <div className="socialmedia-icons">
                                        <a href="https://www.facebook.com/" target="blank" rel="FB placeholder" />
                                        <i className="fab fa-facebook" />
                                        <a href="https://www.twitter.com/" target="blank" rel="Twitter placeholder" />
                                        <i className="fab fa-twitter" />
                                        <a href="https://www.linkedin.com/" target="blank" rel="Linkedin placeholder" />
                                        <i className="fab fa-linkedin" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    );
};






