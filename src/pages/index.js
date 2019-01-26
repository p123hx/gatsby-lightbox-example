import React from "react"
import Layout from "../components/layout_home"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"


console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default () => (
  <Layout> 
  <Container>
  <h1>HKU RoboMaster</h1>
    <p>
      HeraKles, RoboMaster team of the Unitversity of Hong Kong,
      <p>was founded in 2017 and we have won</p>
      <p>the second prize of 2018.</p>
      <p>For more information about this match:RoboMaster</p>
       <a href="https://www.robomaster.com/en-US">https://www.robomaster.com/en-US</a>
      
      <p>Now there are four groups ouder the team:</p>
      
    </p>
    <User
      username="ME"
      avatar="../images/picture/me.jpg"
      excerpt="ME Group stands for Mechanic Engineering Group."
    /><User
    username="EE"
    avatar="../images/picture/ee.jpg"
    excerpt="EE Group stands for Electronic Engineering Group."
  />
    <User
      username="CV"
      avatar="../images/picture/cv.jpg"
      excerpt="CV Group stands for Computer Vision Group."
    />
   <User
      username="OPERATION"
      avatar="../images/picture/operatino.jpg"
      excerpt="Operation Group mainly backs things up."
    />
  </Container>
  </Layout> 
)