import React from 'react'
import empty from '../../Assets/Images/Dashboard/empty.svg'

export const Userdonationsection = () => {
  return (
    <div>
      <main>
        <section className="grid bg-backgroundwhite place-content-center h-screen">
          <div className="w-[60em] p-8 flex flex-col items-center ml-52 mt-20  bg-white shadow-xl rounded-xl ">
            <p className="w-full  font-bold  px-6 text-2xl">Donations</p>
            <figure>
              <img width={398.36} height={398.36} src={empty} alt="" />
            </figure>
            <p className="font-bold font-productsansb text-2xl text-teal">
              No Contributions found.
            </p>
            <p className="text-textgray text-sm">
              We're sorry, but no contributions has been done yet.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
