import React from "react";
import AOS from "aos";
import 'aos/dist/aos.css'; // You c


export const Aboutsection1 = () => {
  AOS.init();
  return (
    <>
      <main>
        <section className=" ">
          <div className=" bg-peach  ">
            <div className="flex flex-col xl:px-48  xl:pt-48    gap-12  lg:pt-48 lg:px-12  ">
              <p
                data-aos="fade-down"
                data-aos-duration="1000"
                className="xl:text-6xl lg:text-2xl text-center font-bold text-darkteal">
                World's Fundraiser platform
              </p>
              <p
                data-aos="fade-down"
                data-aos-duration="2000"
                className="text-center lg:text-sm text-textgray">
                We started in 2023 with the radical idea that anyone, anywhere,
                should be able to easily and securely to start their own
                Campaign. Today, we offer a trusted and easy-to-use platform for
                social movement accross the world.
              </p>
              <figure data-aos="fade-down" data-aos-duration="3000">
                <img
                  src="https://res.cloudinary.com/dalynypf0/image/upload/v1695441425/1_zfnww7.svg"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
