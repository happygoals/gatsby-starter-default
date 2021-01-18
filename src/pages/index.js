import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "../components/image"
import SEO from "../components/seo"
import "../components/styles/style.css"
import Footer from "../components/footer"
import Header from "../components/header"
const IndexPage = () => (
  <div>
  <Header />
  <div className="homepage">
    <SEO title="HaeminRyu" />
    <p className="intro1">Hello there! I'm</p>
    <h2 className="introname">Haemin Ryu,</h2>
    <h3>a software engineer based in Fort Wayne, IN, USA <br />
    Also know as a problem solver, design thinker, experience giver.</h3>
    <p className="para">I build seeing-beyond changes so that <br /> humans experience better.</p>
    <div className="btnrow">
    <button className="button1"><a className="btnlink" href="mailto:developer.haemin.ryu@gmail.com">Get In Touch</a></button>
    <button className="button2" ><a className="btnlink" href="https://drive.google.com/file/d/1diQA5NiLMvcWYZupx688tQm-uLhxuxhD">&nbsp;Resume&nbsp;</a></button>
    </div>
    {/* <div style={{ maxWidth: `100px`, marginB `1.45rem` }}>
      <Image />
    </div> */}
    {/* <AniLink cover to="projects" bg="#663399">
      <a className="projbtn">Projects</a>
    </AniLink> */}
  </div>
  <Footer />
  </div>
)

export default IndexPage
