import React from 'react'

export const Aboutsection8 = () => {
  return (
    <main>
      <section className="relative lg:flex-col  dark:bg-darkgray bg-gray xl:h-[230px] flex xl:items-center xl:justify-center lg:p-5 gap-6">
        <div className="flex items-center gap-x-4 dark:bg-bluegray dark:text-white bg-white shadow-md rounded-2xl p-6  xl:w-[550px] ">
          <div className="text-5xl">
            <i class="fa-solid fa-hand-holding-heart"></i>
          </div>
          <div>
            <p className="font-bold text-2xl">24x7 Help</p>
            <p className="text-bordergray">
              If we fall short of your expectation in any way, let us know
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-4 dark:bg-bluegray dark:text-white bg-white shadow-md rounded-2xl p-6  xl:w-[550px] ">
          <div className="text-5xl">
            <i class="fa-solid fa-hand-holding-dollar"></i>
          </div>
          <div>
            <p className="font-bold text-2xl">Payment Trust</p>
            <p className="text-bordergray">
              Your payment is securely transferred to the fundraisers
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
