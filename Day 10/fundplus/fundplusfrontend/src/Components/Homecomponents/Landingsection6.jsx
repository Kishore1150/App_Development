import React from 'react'

const Landingsection6 = () => {
  return (
    <>
      <main className=''>
        <section className="flex lg:flex-col lg:mt-12 lg:mb-12 lg:p-5 lg:gap-16 pb-16  xl:ml-28 xl:mt-24 xl:gap-56">
          <div className="flex flex-col gap-5">
            <span className=" ">
              <i class="fa-solid text-5xl rounded-full bg-tan p-6 text-lightgreen1 fa-hand-dots"></i>
            </span>
            <p className="font-extrabold text-darkteal font-productsansb text-4xl">
              Victims
            </p>
            <p className="text-textgray xl:w-[20em] text-lg">
              Start a social movements and fundraising for the change
            </p>
            <div className="flex  bg-lightteal hover:duration-300   hover:opacity-90 font-productsansb font-extrabold w-fit text-white px-8 py-3 rounded-xl items-center gap-3">
              <button>Start a Campaign </button>
              <span>
                <i class="fa-solid fa-angle-right"></i>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <span className=" ">
              <i class="fa-solid text-5xl rounded-full bg-tan px-5 py-6 text-lightgreen1  fa-hand-holding-dollar"></i>
            </span>
            <p className="font-extrabold text-darkteal font-productsansb text-4xl">
              Sponsors
            </p>
            <p className="text-textgray xl:w-[20em] text-lg">
              Funding campaigns in line with the vision of a better world{" "}
            </p>
            <div className="flex hover:duration-300   hover:opacity-90 bg-lightteal font-productsansb font-extrabold w-fit text-white px-8 py-3 rounded-xl items-center gap-3">
              <button>Donate Campaigns</button>
              <span>
                <i class="fa-solid fa-angle-right"></i>
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Landingsection6