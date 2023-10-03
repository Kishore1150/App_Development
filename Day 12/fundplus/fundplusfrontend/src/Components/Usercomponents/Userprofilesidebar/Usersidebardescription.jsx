import React, { useState } from 'react'

export const Usersidebardescription = ({name}) => {



  return (
    <main>
      <section className="xl:h-[20em] w-full lg:w-screen  bg-lightteal2">
        <div className="  xl:pt-48 xl:pl-24 lg:pl-10 lg:pt-32 lg:pb-12 ">
          <p className="text-[40px]   text-darkteal  font-bold font-productsansb">
            {name}
          </p>
        </div>
      </section>
    </main>
  );
}
