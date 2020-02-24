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
    <p className="intro1">Hello there! I’m</p>
    <h2 className="introname">Haemin Ryu.</h2>
    
    <h3>I build changes so that <br /> humans' life better.</h3>
    
    <p className="para">I'm a software engineer based in Fort Wayne, IN, USA <br />
    Also know as a problem solver, design thinker, servant leader, creative maker.</p>
    <div className="btnrow">
    <button className="button1"><a className="btnlink" href="mailto:developer.haemin.ryu@gmail.com">Get In Touch</a></button>
    <button className="button2" ><a className="btnlink" href="https://drive.google.com/open?id=1r6xtzN4Z8aZejxT4VhP-n3H7n0ReIn9R">&nbsp;Resume&nbsp;</a></button>
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
