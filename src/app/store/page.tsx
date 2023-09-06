"use client";

import Header from "@/components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import IconCircleRight from "/public/svg/icon-circle-right.svg";
import IconCircleLeft from "/public/svg/icon-circle-Left.svg";
import IconMore from "/public/svg/icon-more.svg";
import Footer from "@/components/Footer";

import StoreImg1 from "/public/image/pottery-store-section2-img1.png";
import StoreImg2 from "/public/image/pottery-store-section2-img2.png";

import "swiper/css";
import "swiper/css/navigation";

export default function store() {
  return (
    <div className="w-full h-screen overflow-auto border-box">
      <Header />
      <div className="w-full space-y-[60px] md:space-y-[96px] overflow-hidden">
        {/* section1 */}
        <div className="mx-[20px] px-0 md:px-[32px] lg:px-[82px]">
          <div className=" w-full mx-auto flex flex-col md:flex-row justify-between md:items-center py-[48px] md:py-[90px]">
            <div className="whitespace-pre py-[24px] md:py-[0px] text-[28px] md:text-[45px] font-semibold leading-[120%] md:leading-[54px] text-[#333]">
              현대사회에 적합한 <br />
              유니폼, 포터리
            </div>
            <div className="flex space-y-[8px] md:space-y-[0px] flex-col md:flex-row text-[12px] font-semibold leading-[120%] text-[#333] pt-[15px] px-[15px] pb-[8px] rounded-t-[15px] border-x border-t border-[#EBEBEB]">
              <div className="w-full md:w-[177px] pb-[16px] md:pb-[0px] border-b md:border-b-0 md:border-r border-[#EBEBEB] pr-[15px]">
                <div className=" pb-1">쇼핑 지원이 필요하다면?</div>
                <div className="flex space-x-[6px]">
                  <div className="font-normal text-[#B7B7B7] leading-[17px]">
                    저희 팀원이 도와드릴께요
                  </div>
                  <Image src={IconMore} alt=""></Image>
                </div>
              </div>
              <div className="w-[192px] md:pl-[15px] pt-[16px] md:pt-[0px]">
                <div className=" pb-1">포터리 제품을 직접 만나보세요.</div>
                <div className="flex space-x-[6px]">
                  <div className="font-normal text-[#B7B7B7] leading-[17px]">
                    가까운 매장 찾기
                  </div>
                  <Image src={IconMore} alt=""></Image>
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-screen mx-auto mx-space-x-2 rounded-2xl items-center bg-[#F7F7F7] px-[24px] py-[20px]">
            <div className="prev cursor-pointer min-w-[30px] h-[30px]">
              <Image src={IconCircleRight} alt=""></Image>
            </div>
            <Swiper
              breakpoints={{
                // 0 ~ 640 : 한번에 3개씩
                0: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                // 640 ~ 768 : 한번에 4개씩
                640: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                // 768 ~ 1024 : 한번에 5개씩
                768: {
                  slidesPerView: 5,
                  spaceBetween: 37,
                },
                // 1024 ~ : 한번에 6개씩
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 86,
                },
              }}
              slideToClickedSlide={true}
              className="!md:px-[53px] mix-blend-multiply"
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              modules={[Navigation, Autoplay]}
            >
              {new Array(16).fill(null).map((_, i) => (
                <SwiperSlide key={i}>
                  <div className="flex flex-col items-center space-y-[10px]">
                    <Image
                      src="/image/store-shirt.png"
                      alt=""
                      width={70}
                      height={70}
                    />
                    <div className="whitespace-pre font-medium text-[15px]">
                      Comfort Shirt
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="next cursor-pointer min-w-[30px] h-[30px]">
              <Image src={IconCircleLeft} alt=""></Image>
            </div>
          </div>
        </div>
        {/* section2 */}
        <div className="mx-[20px]">
          <div className="px-0 md:px-[32px] lg:px-[82px] mx-auto ">
            <span className="text-[22px] md:text-[32px] font-semibold whitespace-pre text-[#333]">
              마일러를 위한 캠페인.{" "}
            </span>
            <span className="text-[22px] md:text-[32px] font-semibold whitespace-normal text-[#B7B7B7]">
              발전적인 당신의 미래를 향해
            </span>
          </div>
          <div className="flex space-x-5 w-full overflow-scroll py-4 md:py-5 px-0 md:px-[32px] lg:px-[82px]">
            <div
              className="overflow-hidden relative rounded-2xl shadow-lg"
              style={{
                minWidth: "calc(36.7% + 241px)",
                height: "500px",
              }}
            >
              <Image src={StoreImg1} alt="" fill className="object-cover" />
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #000000 0%, transparent 50%)",
                }}
              >
              </div>
              <div className="absolute p-[20px] md:p-[30px] text-[#ffffff]">
                <div className="text-[14px] md:text-[18px] font-normal leading-[120%]">
                  새로운 셔츠의 탄생
                </div>
                <div className="mt-[16px] md:mt-[24px] text-[22px] md:text-[28px] font-medium leading-[120%] md:leading-[36px]">
                  포터리만의 유려한 <br />
                  실루엣과 편안함 착용감
                </div>
                <div className="mt-[12px] text-[14px] md:text-[18px] opacity-70">
                  언제 어디서나, 당신의 일상을 편안하게
                </div>
              </div>
            </div>
            <div
              className="overflow-hidden relative rounded-2xl shadow-lg"
              style={{
                minWidth: "calc(36.7% + 241px)",
                height: "500px",
              }}
            >
              <Image src={StoreImg2} alt="" fill className="object-cover" />
            </div>
            <div
              className="overflow-hidden relative rounded-2xl shadow-lg"
              style={{
                minWidth: "calc(36.7% + 241px)",
                height: "500px",
              }}
            >
              <Image src={StoreImg2} alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
        {/* section3 */}
        <div className="mx-[20px]">
          <div className="px-0 md:px-[32px] lg:px-[82px] mx-auto ">
            <span className="text-[22px] md:text-[32px] font-semibold whitespace-pre text-[#333]">
              신제품.{" "}
            </span>
            <span className="text-[22px] md:text-[32px] font-semibold whitespace-normal text-[#B7B7B7]">
              당신의 일상을 새롭게 다채롭게
            </span>
          </div>
          <div className="flex space-x-5 w-full overflow-scroll py-5 px-0 md:px-[32px] lg:px-[82px]">
            <div
              className="overflow-hidden relative rounded-2xl shadow-lg"
              style={{
                minWidth: "calc(23.5% + 162px)",
                height: "456px",
              }}
            >
              <Image src={StoreImg2} alt="" fill className="object-cover" />
            </div>
            <div
              className="overflow-hidden relative rounded-2xl shadow-lg"
              style={{
                minWidth: "calc(23.5% + 162px)",
                height: "456px",
              }}
            >
              <Image src={StoreImg2} alt="" fill className="object-cover" />
            </div>
            <div
              className="overflow-hidden relative rounded-2xl shadow-lg"
              style={{
                minWidth: "calc(23.5% + 162px)",
                height: "456px",
              }}
            >
              <Image src={StoreImg2} alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
        {/* section4 */}
        <div className="mx-[20px]">
          <div className="px-0 md:px-[32px] lg:px-[82px] mx-auto ">
            <span className="text-[22px] md:text-[32px] font-semibold whitespace-pre text-[#333]">
              당신의 하루를 빛나게.{" "}
            </span>
            <span className="text-[22px] md:text-[32px] font-semibold whitespace-normal text-[#333]">
              시그널 아이템
            </span>
          </div>
          <div className="flex space-x-5 w-full overflow-scroll py-5 px-0 md:px-[32px] lg:px-[82px]">
            <div
              className="overflow-hidden relative rounded-2xl shadow-lg"
              style={{
                minWidth: "calc(4.9% + 304px)",
                height: "500px",
              }}
            >
              <Image src={StoreImg2} alt="" fill className="object-cover" />
            </div>
            <div
              className="overflow-hidden relative rounded-2xl shadow-lg"
              style={{
                minWidth: "calc(4.9% + 304px)",
                height: "500px",
              }}
            >
              <Image src={StoreImg2} alt="" fill className="object-cover" />
            </div>
            <div
              className="overflow-hidden relative rounded-2xl shadow-lg"
              style={{
                minWidth: "calc(4.9% + 304px)",
                height: "500px",
              }}
            >
              <Image src={StoreImg2} alt="" fill className="object-cover" />
            </div>
            <div
              className="overflow-hidden relative rounded-2xl shadow-lg"
              style={{
                minWidth: "calc(4.9% + 304px)",
                height: "500px",
              }}
            >
              <Image src={StoreImg2} alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
        {/* section5 */}
        <div className="pb-[200px] mx-[20px]">
          <div className="px-0 md:px-[32px] lg:px-[82px] mx-auto ">
            <span className="text-[22px] md:text-[32px] font-semibold whitespace-pre text-[#333]">
              쇼핑 혜택
            </span>
          </div>
          <div className="flex space-x-5 w-full overflow-scroll py-5 px-0 md:px-[32px] lg:px-[82px]">
            <div
              className="overflow-hidden relative rounded-2xl shadow-lg"
              style={{
                minWidth: "calc(4.9% + 304px)",
                height: "240px",
              }}
            >
              <Image src={StoreImg2} alt="" fill className="object-cover" />
            </div>
            <div
              className="overflow-hidden relative rounded-2xl shadow-lg"
              style={{
                minWidth: "calc(4.9% + 304px)",
                height: "240px",
              }}
            >
              <Image src={StoreImg2} alt="" fill className="object-cover" />
            </div>
            <div
              className="overflow-hidden relative rounded-2xl shadow-lg"
              style={{
                minWidth: "calc(4.9% + 304px)",
                height: "240px",
              }}
            >
              <Image src={StoreImg2} alt="" fill className="object-cover" />
            </div>
            <div
              className="overflow-hidden relative rounded-2xl shadow-lg"
              style={{
                minWidth: "calc(4.9% + 304px)",
                height: "240px",
              }}
            >
              <Image src={StoreImg2} alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
