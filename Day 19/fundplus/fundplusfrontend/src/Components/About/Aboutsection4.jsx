import React from 'react'
import help from '../../Assets/Images/About/help.jpg'

export const Aboutsection4 = () => {
  return (
    <>
      <main>
        <section className="h-full bg-backgroundwhite xl:p-32 lg:p-12 lg:mt-24 flex flex-col gap-12">
          <div className="h-full ">
            <p
              data-aos="fade-down"
              data-aos-duration="1500"
              className="font-bold text-5xl text-darkteal">
              Empowering Change Through Fundraising and Donations
            </p>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="1500"
            className="flex text-[#838f8c] items-start gap-12">
            <p>
              At FundPlus, our mission is clear and straightforward: we are
              dedicated to building a robust platform for fundraising and
              donations with the goal of facilitating positive change around the
              world.
            </p>
            <p>
              We hold a deep-seated belief that the power to transform our world
              lies within every individual. We are convinced that when people
              come together to address societal issues, speak out about them,
              and take collective action, we can create a brighter future for
              all.
            </p>
          </div>
          <figure data-aos="fade-down" data-aos-duration="1500">
            <img
              className="rounded-xl xl:h-[30em] xl:object-cover xl:w-full"
              src={help}
              alt=""
            />
          </figure>
        </section>
      </main>
    </>
  );
}
