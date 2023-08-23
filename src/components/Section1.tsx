import Image from "next/image";
import Section1Img from "/public/image/pottery-section1-img.jpeg";

export default function Section1() {
  return (
    <div className="w-full relative">
      <Image src={Section1Img} alt="" />
      <div className="absolute top-0 bottom-0 left-[80px] flex justify-center flex-col text-white">
        <div className="text-[17px] leading-4 mb-[12px]">캠페인 | 여름 23</div>
        <div className="text-[45px] leading-[55px] mb-[32px]">
          포터리만의 유려한 <br />
          실루엣과 편안한 착용감
        </div>
        <div className="flex space-x-[30px]">
          <button className="w-[125px] text-[#333] py-[10px] leading-4 bg-white rounded-[10px]">
            구입하기
          </button>
          <button className="text-white ">더 알아보기 &gt;</button>
        </div>
      </div>
    </div>
  );
}
