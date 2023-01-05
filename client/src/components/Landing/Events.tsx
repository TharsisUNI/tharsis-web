import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export const Events = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-16 py-6 flex flex-col space-y-4">
        <div className="flex flex-col space-y-1 px-1">
          <p className="text-4xl font-semibold text-[#33333D]">Tharsis Events</p>
          <div className="h-1 w-14 bg-brand-orange"></div>
        </div>
        <div className="w-full bg-slate-600">
          <Swiper
            watchSlidesProgress={true}
            slidesPerView={3}
            spaceBetween={45}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              "@0.75": {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="mySwiper py-4 px-6 lg:px-14"
          >
            <SwiperSlide>
              <div className="h-56 bg-white rounded-lg">1</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-56 bg-white rounded-lg">2</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-56 bg-white rounded-lg">3</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-56 bg-white rounded-lg">4</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-56 bg-white rounded-lg">5</div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}
