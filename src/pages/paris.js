import React from 'react'
import Layout from '../components/layout'
import {graphql, useStaticQuery} from 'gatsby'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

const Paris=()=> {
    const data= useStaticQuery(graphql`
            query {
                allCloudinaryMedia {
                    edges {
                      node {
                        id
                        resource_type
                        url
                        public_id
                      }
                    }
                  }
            }
    `)

    console.log(data)

    

    return (
        
        <Layout>
            <h2>About Paris</h2>
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

export default Paris;
