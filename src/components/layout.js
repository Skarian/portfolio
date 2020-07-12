import React from "react"
import { GlobalStyle } from "../styles/global"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: "description", content: data.site.siteMetadata.description },
          { name: "keywords", content: "tags tags tags" },
        ]}
      />
      <GlobalStyle />
      <main>{children}</main>
    </>
  )
}

export default Layout
