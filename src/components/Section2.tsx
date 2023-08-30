import Image from "next/image";
import Section2Img from "/public/image/pottery-section2-img.jpeg";
import IconRight from "/public/svg/icon-right.svg";

export default function Section2() {
  return (
    <div className="w-full h-[655px] relative">
      <div>
        <Image
          src={Section2Img}
          fill
          style={{ objectFit: "cover" }}
          alt=""
          className="bg-center"
        ></Image>
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000000 0%, transparent 50%)",
          }}
        ></div>
      </div>
      <div className="absolute top-0 bottom-0 left-[24px] md:left-[80px] flex justify-center flex-col text-white">
        <div className="text-[12px] md:text-[17px] leading-[140%] md:leading-4 mb-[8px] md:mb-[12px]">캠페인 | 여름 23</div>
        <div className="text-[24px] md:text-[45px] leading-[130%] md:leading-[55px] mb-[24px] md:mb-[32px]">
          포터리만의 유려한 <br />
          실루엣과 편안한 착용감
        </div>
        <div className="flex space-x-[30px]">
          <button className="w-[125px] text-[#333] py-[10px] leading-4 bg-white rounded-[10px]">
            구입하기
          </button>
          <button className="text-white flex justify-center items-center gap-[8px]">
            더 알아보기
            <Image src={IconRight} alt=""></Image>
          </button>
        </div>
      </div>
    </div>
  );
}
