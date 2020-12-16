import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import Carousel from 'react-bootstrap/Carousel'
import Author from "../images/author.jpg"
import Author2 from "../images/author2.jpg"
import Css from "../images/css.jpg"

const Slider = () => (
  
        <StaticQuery query={sliderQuery} render={data=>{
            {console.log(data)}
          return (

       
             <Carousel>
                 {data.allMarkdownRemark.edges.map(({ node })=>(           
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={node.frontmatter.image}
                            alt={node.id}
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                 ))} 
                
                  
            </Carousel>
          )

}}/>

)


const sliderQuery = graphql`
  query MyQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/slider/"}}) {
      edges {
        node {
          id
          html
          frontmatter {
          image
          }
        }
      }
    }
  }
  `
  
  export default Slider