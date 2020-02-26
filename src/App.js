import React from "react";
import "./styles.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserInfo from "./component/UserInfo";
import SocialMedia from "./component/SocialMedia";
import AboutMe from "./component/AboutMe";
import Result from "./component/Result";
import LogIn from "./component/LogIn";
import { SocialMediaProvider } from "./ResumeInfoContext";

export default function App() {
  return (
    <>
      <Header />

      <main className="container">
        <div className="modal">
          <Router>
            <SocialMediaProvider>
              <Route exact path="/" component={LogIn} />
              <Route path="/userInfo" component={UserInfo} />
              <Route path="/SocialMedia" component={SocialMedia} />
              <Route path="/AboutMe" component={AboutMe} />
              <Route path="/result" component={Result} />
            </SocialMediaProvider>
          </Router>
        </div>
      </main>
      <Footer />
    </>
  );
}
