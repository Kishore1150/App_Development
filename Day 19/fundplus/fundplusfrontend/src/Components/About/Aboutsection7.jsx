import React, { useState, useEffect } from "react";

import { Carousel } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export const Aboutsection7 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [autoplayInterval, setAutoplayInterval] = useState(2000);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);

    if (activeIndex === images.length - 1) {
      setActiveIndex(0);
    }
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Effect to control autoplay
  useEffect(() => {
    let interval;

    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, autoplayInterval);
    }

    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval]);

  const images = [
    "https://res.cloudinary.com/dalynypf0/image/upload/v1695553376/1_tezwrc.jpg",
    "https://res.cloudinary.com/dalynypf0/image/upload/v1695553374/2_jsr3ts.jpg",
    "https://res.cloudinary.com/dalynypf0/image/upload/v1695553373/3_bkio5o.jpg",
  ];

  return (
    <>
      <main>
        <section className="xl:px-32 xl:hidden xl:py-12   flex lg:flex-col items-center">
          <figure  className="lg:hidden">
            <img
              src="https://res.cloudinary.com/dalynypf0/image/upload/v1695441425/5_suid9q.svg"
              alt=""
              width="100"
            />
          </figure>
          <Carousel
            className="xl:rounded-xl xl:hidden lg:w-screen  xl:h-[20em] xl:w-[35em]"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
            activeIndex={activeIndex} // Pass the activeIndex to the Carousel
            onNext={() => {
              handleNext();
            }}
            onPrevious={() => {
              handlePrev();
            }}
            autoplay={autoplay}
            autoplayDelay={autoplayInterval}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`image ${index + 1}`}
                className="h-full w-full object-cover"
              />
            ))}
          </Carousel>
        </section>
      </main>
    </>
  );
};
