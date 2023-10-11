import React from 'react'
import logo from '../../Assets/Images/logo.svg';

export const Landingsection1 = () => {
  return (
    <>
      <div class="box1-main xl:bg-landingimage lg:bg-cover w-full lg:w-screen xl:bg-cover bg-no-repeat xl:bg-center   lg:bg-landingimage2 lg:flex-col lg:bg-opacity-60 xl:h-[700px]   ">
        <div className="grid xl:place-content-center lg:relative lg:top-32 xl:h-full  ">
          <div className="flex flex-col items-center lg:gap-5  xl:gap-5">
            <p className="xl:text-6xl lg:text-5xl text-blueteal  font-productsansb font-extrabold">
              Your Home
            </p>
            <p className="xl:text-6xl lg:text-5xl text-blueteal font-productsansb font-extrabold">
              for Help
            </p>
          </div>

          <div className="flex justify-center mt-6 items-center gap-5">
            <button class="box1l-btn1 flex items-center  gap-3 font-bold font-productsansb xl:px-8 xl:py-4 lg:px-12 lg:py-4 xl:text-xl bg-white text-darkteal hover:bg-[#e6f6ef] hover:duration-700  hover:transition-all shadow-2xl rounded-full">
              <img width={20} src={logo} alt="" />
              <p>Start a fundplus</p>
            </button>
          </div>
        </div>

        <div class="relative box1-right xl:w-[560px] xl:h-[780px] lg:w-[320px] lg:h-[603.35px]">
          {/* <img
            src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1695099994/homapage-hero_x7wfqe.png"
            class="box1r-img1 pt-[70px] object-cover xl:w-[540px] xl:h-[662.05px] lg:w-[400.6px] lg:h-[470.46px]"
            alt="girl"></img>

          <img
            src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1695099993/homapage-hero-widget-1_uvokwd.png"
            alt="people"
            class="box1r-img2 absolute xl:w-[300px] xl:h-[177.6px] lg:w-[175px] lg:h-[108.4px] xl:top-[12%] xl:left-[49%] lg:top-[19%] lg:left-[50%]"></img>

          <img
            src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1695099993/homapage-hero-widget-2_kqoizz.png"
            alt="donation"
            class="box1r-img3 absolute xl:w-[400px] xl:h-[179.2px] lg:w-[225px] lg:h-[113.35px] xl:top-[72%] xl:left-[32%] lg:top-[81%] lg:left-[35%]"></img>

          <img
            src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1695099993/homapage-hero-widget-3_gasgjr.png"
            alt="hand"
            class="box1r-img4 absolute xl:w-[180px] xl:h-[173.88px] lg:w-[120px] lg:h-[115.9px] xl:top-[25%] xl:left-[-7%] lg:top-[27%] lg:left-[-7%]"></img> */}
        </div>
      </div>
    </>
  );
}




