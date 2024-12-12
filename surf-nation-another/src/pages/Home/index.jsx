import React from 'react'
import styles from "./Home.module.css"
import PagesLayout from '../../components/layout/page/PagesLayout'
import Hero from '../../components/layout/common/Hero'
import Surfing from "../../assets/images/surfing.png"

const index = () => {
  return (
    <PagesLayout main={Hero} image={Surfing}/>
  )
}

export default index