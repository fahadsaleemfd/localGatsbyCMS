import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import CardColumns from 'react-bootstrap/CardColumns'
import Author from "../images/Author.jpg"
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import {Col,Button} from 'react-bootstrap'


const ThemeticArea = () => (
    <StaticQuery query={areaQuery} render={data=>{
        {console.log(data)} 
   
   return (
        <Container>
            <Row>
                <Col>
            {data.allMarkdownRemark.edges.map(({ node })=>(
            <Card  style={{ width: '18rem' }}>
            <Card.Img variant="top" src={node.frontmatter.image.childImageSharp.fluid.src}
                            alt={node.id} />
            <Card.Body>
                    <Card.Title>{node.frontmatter.title}</Card.Title>
                    <Card.Text>
                    {node.frontmatter.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            ))} 
            </Col></Row>
        </Container>
   )
    }} />

)

const areaQuery = graphql`
  query Query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "posts/themeticAreas/"}}) {
      edges {
        node {
          id
          html
          frontmatter {
              
              
              title
              description
          image{
                
                    childImageSharp{
                      fluid(maxWidth:600){
                        ...GatsbyImageSharpFluid
                      }
                    }
            }
          }
        }
      }
    }
  }
  `

export default ThemeticArea