import React from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import error from '../../Assets/Images/404/error.svg'
import Footer from '../../Components/Footercomponents/Footer/Footer';
import { useNavigate } from 'react-router-dom';

export const Errornotfound = () => {
  const navigate=useNavigate();
  return (
    <>
      <Navbar />
      <main>
        <section className="grid place-content-center h-screen m-20">
          <div className="flex flex-col items-center  ">
            <figure>
              <img src={error} alt="" />
            </figure>
            <p className="text-8xl  font-poppins text-purple font-extrabold">
              404
            </p>
            <p className=" font-extrabold text-[48px]">
              Oh no, something went wrong!
            </p>
            <div className="flex flex-col items-center gap-4">
              <p className="text-lightgray font-poppins">
                Either something went wrong or this page doesn't exist anymore.
              </p>
              <button onClick={()=>navigate("/home")} className="bg-gray hover:bg-[#dfdfe3] hover:transition-all hover:duration-300 px-5 py-2.5 rounded-lg font-semibold font-dmsans">
                Take me to Homepage
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
