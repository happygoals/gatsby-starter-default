import React from "react"
import "../components/styles/style.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
export default function header() {
  return (
    <div>
      <div class="topnav">
        <AniLink cover to="projects" bg="rgb(235, 210, 97)">
          <a>Projects -></a>
          {/* <a>HireMe</a> */}
        </AniLink>
        <a href="http://haeminryu.com/takeaways">Notes</a>
        <a href="http://haeminryu.com/haemin-ryu-devlog">Blogs</a>
       {/*  <AniLink cover to="http://haeminryu.com/haemin-ryu-devlog" bg="#663399">
          <a>Projects</a>
        </AniLink> */}
      </div>
    </div>
  )
}
