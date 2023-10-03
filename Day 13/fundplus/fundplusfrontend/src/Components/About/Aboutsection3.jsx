import React from 'react'
import bg from '../../Assets/Images/About/bg.svg'
export const Aboutsection3 = () => {
  return (
    <>
      <main>
        <section className=" relative lg:top-[5em] h-full">
          <div className="  xl:h-screen">
            <img
              data-aos="fade-left"
              data-aos-duration="1500"
              className="absolute   lg:w-screen"
              src={bg}
              alt=""
            />
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              className="text-lightteal  w-fit  relative xl:top-[15em] xl:left-[10em]  lg:px-10">
              <p className="font-bold lg:pt-12  w-fit text-6xl lg:text-3xl">
                Our values
              </p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              className="flex lg:bg-[#f5efe0] lg:flex-col lg:gap-10 lg:p-10 lg:top-[2em] xl:px-24  xl:ml-16  relative  xl:items-center ">
              <div className="relative gap-5   xl:top-[20em] flex flex-col justify-center">
                <span className="text-lightteal font-bold text-7xl">01</span>
                <span className="text-lightteal font-bold text-2xl">
                  Make more value, not money.
                </span>
                <span className="text-[#667672]">
                  We focus on creative and delivering value to people across the
                  world.
                </span>
              </div>
              <div className="relative  gap-5   xl:top-[20em] flex flex-col justify-center">
                <span className="text-lightteal font-bold text-7xl">02</span>
                <span className="text-lightteal font-bold text-2xl">
                  Make it simple, not stressful.
                </span>
                <span className="text-[#667672]">
                  We make everything simple, clearly and accessible to everyone.
                </span>
              </div>
              <div className="relative  gap-5 xl:top-[20em] flex flex-col justify-center">
                <span className="text-lightteal font-bold text-7xl">03</span>
                <span className="text-lightteal font-bold text-2xl">
                  Be human, not devil.
                </span>
                <span className="text-[#667672]">
                  We do the right things with love and sincerity to create
                  sustainability.
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
