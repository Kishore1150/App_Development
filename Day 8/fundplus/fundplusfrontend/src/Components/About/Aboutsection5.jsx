import React from 'react'

export const Aboutsection5 = () => {
  return (
    <>
      <main>
        <section>
          <div className=" bg-[#fbf7ed] lg:px-12 flex flex-col gap-20 xl:px-52 pt-32">
            <div className="flex flex-col gap-2 items-center ">
              <p
                data-aos="fade-down"
                data-aos-duration="1500"
                className="font-bold text-6xl text-darkteal">
                Our vision
              </p>
              <p
                data-aos="fade-down"
                data-aos-duration="1500"
                className="text-[#838f8c] text-center">
                Our vision is to be the best fundraiser platform in the world.
              </p>
            </div>
            <figure data-aos="fade-down" data-aos-duration="1500">
              <img
                src="https://res.cloudinary.com/dalynypf0/image/upload/v1695441425/4_ttuw8k.svg"
                alt=""
              />
            </figure>
          </div>
        </section>
      </main>
    </>
  );
}
