import React from 'react'
import empty from "../../Assets/Images/Dashboard/empty.svg";

export const Campaignsection = () => {
  return (
    <div>
      <section className="grid bg-backgroundwhite place-content-center h-screen">
        <div className="xl:w-[60em]  p-8 flex flex-col items-center xl:ml-52 mt-20  bg-white shadow-xl rounded-xl ">
          <p className="w-full  font-bold  px-6 text-2xl">My Campaigns</p>
          <figure>
            <img width={398.36} height={398.36} src={empty} alt="" />
          </figure>
          <p className="font-bold font-productsansb text-2xl text-teal">
            No campaigns found.
          </p>
          <p className="text-textgray text-sm">
            We're sorry, but no campaigns have been started yet.
          </p>
        </div>
      </section>
    </div>
  );
}
