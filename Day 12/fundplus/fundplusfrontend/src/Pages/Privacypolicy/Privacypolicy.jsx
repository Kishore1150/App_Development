import React from 'react'
import { Privacypolicysection } from '../../Components/Privacypolicy/Privacypolicysection'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Usersidebardescription } from '../../Components/Usercomponents/Userprofilesidebar/Usersidebardescription'
import Footer from '../../Components/Footer/Footer'

export const Privacypolicy = () => {
  return (
    <>
      <Navbar/>
      <Usersidebardescription name="privacy policy"/>
      <Privacypolicysection/>
      <Footer/>

    </>
  )
}
