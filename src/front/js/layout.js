import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import injectContext from "./store/appContext";
import { Landing } from "./pages/landing";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { Shuffle } from "./pages/shuffle";
import { EditProfile } from "./component/editProfile";
import { PostSlide } from "./pages/postSlide";
import { Profile } from "./pages/profile";
import { AboutUs } from "./pages/aboutus";
import { Sitemap } from "./pages/sitemap";



//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;

  return (
    <>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Routes>
            <Route element={<Login />} path="/login" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<Landing />} path="/" />
            <Route element={<Profile />} path="/profile" />
            <Route element={<EditProfile />} path="/edit-profile" />
            <Route element={<PostSlide />} path="/posts" />
            <Route element={<AboutUs />} path="/about-us" />
            <Route element={<Shuffle />} path="/shuffle" />
            <Route element={<Sitemap />} path="/sitemap" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

export default injectContext(Layout);
