import React from 'react'
import john from '../../Assets/Images/Donatecampaign/John.jpg'

const Donatecampaignsection1 = () => {
  return (
    <>
      <main>
        <section>
          <div className="h-[25em]   grid place-content-center   ">
            <div className="flex flex-col items-center">
              <p className="text-[2.5em] px-28 text-darkteal font-productsansr font-extrabold  text-center ">
                Spirit flight crews & employees for medical freedom and civil
                liberties
              </p>
            </div>
            <div className=" flex gap-1.5 items-center justify-center ">
              <figure>
                <img className="w-8 h-8 rounded-full" src={john} alt="" />
              </figure>
              <p className="font-bold ">Arul Kumaran</p>
              <span>&#183;</span>
              <p className="text-sm text-lightgray">
                Baniyan Company, Tiruppur, Tamilnadu
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Donatecampaignsection1