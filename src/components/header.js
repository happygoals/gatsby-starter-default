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
       
      </div>
    </div>
  )
}
