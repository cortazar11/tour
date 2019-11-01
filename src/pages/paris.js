import React from 'react'
import Layout from '../components/layout'
import {graphql, useStaticQuery, Link} from 'gatsby'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

const Paris=()=> {
    
    const data= useStaticQuery(graphql`
            query {
                allCloudinaryMedia (
                    filter: {
                        tags: {
                            eq: "paris"
                        }
                    }
                ) {
                    edges {
                      node {
                        tags
                        url
                        public_id
                      }
                    }
                  }
            }
    `)
    

    

    return (
        
        <Layout>
            <h2>PARIS</h2>
            <ul>
            {data.allCloudinaryMedia.edges.map((edge)=>{
                return (
                    <li>
                        <a href={
                            edge.node.url
                        }><Image cloudName="martinez" publicId={edge.node.public_id}  raw_transformation="w_1000,ar_16:9,c_fill,g_auto,e_sharpen" />
                        </a>
                    
                    </li>
                )
            })}

            </ul>
            
        </Layout>
    )
}

export default Paris;


