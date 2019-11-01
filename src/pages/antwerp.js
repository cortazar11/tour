import React from 'react'
import Layout from '../components/layout'
import {graphql, useStaticQuery} from 'gatsby'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

const Antwerp=()=> {
    
    const data= useStaticQuery(graphql`
            query {
                allCloudinaryMedia (
                    filter: {
                        tags: {
                            eq: "antwerp"
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
            <h2>ANTWERP</h2>
            <ul>
            {data.allCloudinaryMedia.edges.map((edge)=>{
                return (
                    <li>
                    <Image cloudName="martinez" publicId={edge.node.public_id}  raw_transformation="w_1000,ar_16:9,c_fill,g_auto,e_sharpen" />
                    
                    </li>
                )
            })}

            </ul>
            
        </Layout>
    )
}

export default Antwerp;