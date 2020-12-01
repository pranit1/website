import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image";
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  const data = useStaticQuery(graphql`
  query IconQuery {
    avatar_github: file(absolutePath: { regex: "/github.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    home: file(absolutePath: { regex: "/home.png/" }) {
      childImageSharp {
        fixed(width: 60, height: 60, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    avatar_linkedin: file(absolutePath: { regex: "/linkedin.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`)
const avatar_github = data?.avatar_github?.childImageSharp?.fixed
const avatar_linkedin = data?.avatar_linkedin?.childImageSharp?.fixed
const avatar_home = data?.home?.childImageSharp?.fixed
  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
      {avatar_home && (
        <Image
          fixed={avatar_home}
          alt="home"
          className="home-avatar"
          imgStyle={{
            borderRadius: `50%`,
            padding: `5px`
          }}
        />
      )}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
     <p>Follow me on!</p> 
     <a href = "https://github.com/pranit1">  
      {avatar_github && (
        <Image
          fixed={avatar_github}
          alt="github"
          className="github-avatar"
          imgStyle={{
            borderRadius: `50%`,
            padding: `5px`
          }}
        />
      )}
  
     </a>
     <a href = "https://www.linkedin.com/in/pranit-shinde-6880b489/">
     
      {avatar_linkedin && (
        <Image
          fixed={avatar_linkedin}
          alt="linkedin"
          className="linkedin-avatar"
          imgStyle={{
            borderRadius: `50%`,
            padding: `5px`
          }}
        />
      )}
    
     </a>
     </footer>
    </div>
  )
}

export default Layout
