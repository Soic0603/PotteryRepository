"use client";

import Header from "@/components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function store() {
  return (
    <div className="w-full h-screen overflow-auto border-box">
      <Header />
      <div className="space-y-5 overflow-hidden">
        {/* section1 */}
        <div className="w-full flex justify-between max-w-7xl mx-auto items-center py-[90px]">
          <div className="text-[45px] font-semibold leading-[54px] text-[#333]">
            현대사회에 적합한 <br />
            유니폼, 포터리
          </div>
          <div className="flex text-[12px] font-semibold leading-[120%] text-[#333] pt-[15px] px-[15px] pb-[8px] rounded-t-[15px] border-x border-t border-[#EBEBEB]">
            <div className="w-[177px] border-r border-[#EBEBEB] pr-[15px]">
              <div className=" pb-1">쇼핑 지원이 필요하다면?</div>
              <div className="text-[#B7B7B7] leading-[17px]">
                저희 팀원이 도와드릴께요 &#12297;
              </div>
            </div>
            <div className="w-[192px] pl-[15px]">
              <div className=" pb-1">포터리 제품을 직접 만나보세요.</div>

              <div className="text-[#B7B7B7] leading-[17px]">
                가까운 매장 찾기 &#12297;
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-2 rounded-2xl items-center bg-[#F7F7F7] px-[24px] py-[20px]">
          <div className="prev cursor-pointer rounded-full min-w-[30px] h-[30px] text-center flex items-center justify-center font-bold bg-[#EBEBEB]">
            &lt;
          </div>
          <Swiper
            spaceBetween={86}
            slidesPerView={6}
            slideToClickedSlide={true}
            // autoplay={{
            //   delay: 300,
            // }}
            // loop={true}
            className="px-[53px]"
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            modules={[Navigation, Autoplay]}
          >
            {new Array(16).fill(null).map((_, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col items-center">
                  <Image
                    src="/image/store-shirt.png"
                    alt=""
                    width={85}
                    height={85}
                    className="bg-yellow-300"
                  />
                  <div className="whitespace-pre text-[12px]">
                    Comfort Shirt{i}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="next cursor-pointer rounded-full min-w-[30px] h-[30px] text-center flex items-center justify-center font-bold bg-[#EBEBEB]">
            &gt;
          </div>
        </div>
      </div>
    </div>
  );
}
