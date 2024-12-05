import React from 'react'
import PageLayout from '../../components/layouts/page/PageLayout'
import Hero from '../../components/common/Hero/Hero'
import SurfingImg from "../../assets/images/surfing.jpg"

const index = () => {
  return (
    <>
        <PageLayout image={SurfingImg} component={Hero}/>
    </>
  )
}

export default index