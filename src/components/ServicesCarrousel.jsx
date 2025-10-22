'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { data } from '../data/data';

export default function ServicesCarousel() {
  const { services } = data;
  const [activeService, setActiveService] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRefs = useRef([]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="w-full mt-4 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-28 xl:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-6">
              <h3
                className={`text-2xl font-bold text-center text-heading relative transition-all duration-300 ${
                  activeService === index ? 'after:w-full' : 'after:w-0'
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-accent after:transition-all after:duration-500 after:ease-out`}
              >
                {service.name}
              </h3>
            </div>

            <div className="w-full max-w-96 md:max-w-96 relative group">
              <Swiper
                effect="cards"
                grabCursor={true}
                modules={[EffectCards]}
                className=" w-full"
                cardsEffect={{
                  slideShadows: true,
                  transformEl: null,
                }}
                onSwiper={(swiper) => {
                  swiperRefs.current[index] = swiper;
                }}
              >
                {service.service.map((dataService, serviceIndex) => (
                  <SwiperSlide
                    key={serviceIndex}
                    className="bg-background-alt rounded-2xl shadow-lg border border-background-alt cursor-pointer"
                    onClick={() => {
                      setActiveService(index);
                      setTimeout(() => setActiveService(null), 2000);
                    }}
                  >
                    <div className="flex flex-col h-full p-6">
                      <div className="flex-1 space-y-4">
                        <h4 className="text-xl font-bold text-heading leading-tight">
                          {dataService.name}
                        </h4>

                        <p className="text-primary/80 text-sm leading-relaxed">
                          {dataService.description}
                        </p>

                        <div className="flex-1 flex items-center justify-center">
                          <img
                            src={isMobile ? dataService.urlMobile : dataService.urlWeb}
                            alt={dataService.name}
                            className="w-full h-32 md:h-64 object-cover rounded-lg object-center"
                          />
                        </div>
                      </div>

                      <button className="cursor-pointer mt-6 w-full bg-accent active:bg-accent/60 text-primary font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <a href="#contact">Solicitar cotizacion</a>
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                type="button"
                onClick={() => swiperRefs.current[index]?.slidePrev()}
                className="swiper-button-prev flex items-center justify-center rounded-full absolute bg-white/5 top-1/2 -translate-x-6 -translate-y-1/2 z-30"
                aria-label="Anterior"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6"></path>
                </svg>
              </button>

              <button
                type="button"
                onClick={() => swiperRefs.current[index]?.slideNext()}
                className="swiper-button-next flex items-center justify-center rounded-full absolute bg-white/5 top-1/2 translate-x-6 -translate-y-1/2 z-30"
                aria-label="Siguiente"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 sm:w-6 sm:h-6 text-orange-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
