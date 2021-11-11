import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      info: siteMetadata {
        title
        description
        title
        data
        author
        person {
          name
          age
        }
      }
    }
  }
`
const Header = () => {
  const {
    site: {
      info: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>Title : {title}</h1>
      <h1>Name : {name}</h1>
    </div>
  )
}

export default Header
