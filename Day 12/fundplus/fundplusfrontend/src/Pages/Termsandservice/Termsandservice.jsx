import React from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Usersidebardescription } from '../../Components/Usercomponents/Userprofilesidebar/Usersidebardescription'
import { Termsandservicesection } from '../../Components/Termsandservice/Termsandservicesection'
import Footer from '../../Components/Footer/Footer'

const Termsandservice = () => {
  return (
    <div>
      <Navbar/>
      <Usersidebardescription name="Terms and Conditions"/>
      <Termsandservicesection/>
      <Footer/>
    </div>
  )
}

export default Termsandservice