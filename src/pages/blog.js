import React from 'react'
import Link from 'gatsby-link'
import Layout from "../components/layout"

const BlogPage=({data})=>{
    return (
        <Layout>
            <h2>Latest Posts</h2>
            <p>{data.allMarkdownRemark.edges.map(post=>(
                <div key={post.node.id}>
                    <h3>{post.node.frontmatter.title}</h3>
                    <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
                    <br />
                    <Link to={post.node.frontmatter.path}>Read More</Link>
                    <br />
                </div>
            ))}</p>
        </Layout>
    )
}

export const pageQuery= graphql`
    query BlogIndexQuery {
        allMarkdownRemark {
            edges {
              node {
                id
                frontmatter {
                  path
                  title
                  date
                  author
                }
               
              }
            }
          }
    }
`


export default BlogPage;
