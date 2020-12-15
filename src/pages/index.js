import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Slider from "../components/slider"
import ThemeticArea from "../components/themeticAreas"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import {Video} from '../images/demo1.mp4'

const IndexPage = () => (

  <Layout>
    <SEO title="Home" />
    <Slider/>
      {/* <video width="320" height="240" controls>
      <source src={Video} type="video/mp4"/>
      </video> */}
    <ThemeticArea/>
  </Layout>
)

export default IndexPage
