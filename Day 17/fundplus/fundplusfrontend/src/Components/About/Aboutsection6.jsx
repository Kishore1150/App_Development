import React from "react";
import { useEffect } from "react";

const Aboutsection6 = () => {
  useEffect(() => {
    const counters = document.querySelectorAll(".box7-value");
    const speed = 500;
    const handleScroll = () => {
      if (window.scrollY > 2500) {
        counters.forEach((counter) => {
          const updateCount = () => {
            const target = parseInt(counter.getAttribute("data-target"));
            const count = parseInt(counter.innerText);
            const increment = Math.trunc(target / speed);
            if (count < target) {
              counter.innerText = count + increment;
              setTimeout(updateCount, 1);
            } else {
              counter.innerText = target.toLocaleString();
            }
          };

          updateCount();
        });
        window.removeEventListener("scroll", handleScroll); // Remove the scroll listener after executing the animation
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the scroll listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div class="box7 relative  lg:p-12 xl:h-[300px] flex items-center justify-evenly lg:flex-col  w-full bg-[#396c61]">
        <div class="counter w-[340px] xl:h-[91px] lg:h-[150px] text-center">
          <span
            data-target="20000"
            class="box7-value text-6xl text-white font-bold">
            0
          </span>
          <span class="box7-f1-head xl:text-2xl lg:1xl text-white">
            <br />
             Campaigns
            <br />
          </span>
        </div>

        <div class="counter w-[340px] xl:h-[91px] lg:h-[144px] text-center">
          <span
            data-target="10000"
            class="box7-value text-6xl text-white font-bold">
            0
          </span>
          <span class="box7-f2-head xl:text-2xl lg:1xl text-white">
            <br />
            Donations
            <br />
          </span>
        </div>

        <div class="counter w-[340px] xl:h-[91px] lg:h-[144px] text-center">
          <span
            data-target="1000000"
            class="box7-value text-6xl text-white font-bold">
            0
          </span>
          <span class="box7-f3-head xl:text-2xl lg:1xl text-white">
            <br />
            Fundraised per year
            <br />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Aboutsection6;
