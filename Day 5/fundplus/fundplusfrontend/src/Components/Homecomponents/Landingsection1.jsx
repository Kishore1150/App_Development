import React from 'react'
import landingimage from '../../Assets/Images/Home/landingimage.jpg';

export const Landingsection1 = () => {
  return (
    <>
      <div class="box1-main bg-landingimage lg:bg-cover  w-full xl:bg-contain bg-no-repeat bg-center   lg:flex-col xl:h-[660px] lg:h-[400px]">
        <div className="grid place-content-center  mt-5 h-full">
          <div className="flex flex-col items-center gap-5">
            <p className="xl:text-6xl lg:text-3xl text-darkteal  font-productsansb font-extrabold">
              Fundraising for and
            </p>
            <p className="xl:text-6xl lg:text-3xl text-darkteal font-productsansb font-extrabold">
              the people
            </p>
            <p className="xl:text-6xl lg:text-3xl text-darkteal font-productsansb font-extrabold">
              cause you care
            </p>
          </div>

          <div className="flex justify-center mt-12 items-center gap-5">
            <button class="box1l-btn1 px-10 py-5 xl:text-xl bg-darkteal text-white rounded-full">
              <p>Get started</p>
            </button>
            <button class="box1l-btn2 px-10 py-5 xl:text-xl bg-white text-[#396c61] rounded-[50px]">
              <p>Learn more</p>
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




