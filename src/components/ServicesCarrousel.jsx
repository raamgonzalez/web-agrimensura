'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { data } from '../data/data';

export default function ServicesCarousel() {
  const { services } = data;
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="w-full mt-4 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:flex lg:gap-28">
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

            <div className="w-full max-w-sm">
              <Swiper
                effect="cards"
                grabCursor={true}
                modules={[EffectCards]}
                className="w-72 h-[420px] md:w-full md:h-[500px]"
                cardsEffect={{
                  slideShadows: true,
                  transformEl: null,
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
                          <picture>
                            <source
                              srcSet={`${dataService.url}?w=342&format=webp 1x, ${dataService.url}?w=684&format=webp 2x`}
                              type="image/webp"
                            />
                            <source
                              srcSet={`${dataService.url}?w=342 1x, ${dataService.url}?w=684 2x`}
                              type="image/jpeg"
                            />
                            <img
                              src={`${dataService.url}?w=342`}
                              alt={dataService.name}
                              className="w-full h-32 md:h-64 object-cover rounded-lg"
                              loading="lazy"
                              decoding="async"
                              sizes="(max-width: 768px) 100vw, 342px"
                            />
                          </picture>
                        </div>
                      </div>

                      <button className="cursor-pointer mt-6 w-full bg-accent active:bg-accent/60 text-primary font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <a href="#contact">Solicitar cotización</a>
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
