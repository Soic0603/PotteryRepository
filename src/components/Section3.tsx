import Image from "next/image";
import ImageProduct from "/public/image/pottery-product.jpeg";
import IconRightBlack from "/public/svg/icon-right-black.svg";

export default function Section3() {
  return (
    <div className="w-full bg-gray-100 overflow-hidden">
      <div className="md:ml-[80px] flex flex-col-reverse md:flex-row justify-between items-center w-full h-full">
        <div className="flex justify-center h-full flex-col text-black py-8">
          <div className="text-[12px] md:text-[17px] leading-[140%] md:leading-4 mb-[8px] md:mb-[12px]">
            캠페인 | 여름 23
          </div>
          <div className="text-[24px] md:text-[45px] leading-[130%] md:leading-[55px] mb-[24px] md:mb-[32px] whitespace-pre">
            포터리만의 유려한 <br />
            실루엣과 편안한 착용감
          </div>
          <div className="flex space-x-[30px]">
            <button className="bg-black w-[125px] rounded-[10px] text-[#fff] py-[10px] leading-4 bg-blackounded-[10px]">
              구입하기
            </button>
            <button className="text-black flex justify-center items-center gap-[8px]">
              더 알아보기
              <Image src={IconRightBlack} alt=""></Image>
            </button>
          </div>
        </div>
        <div className="w-full h-full flex items-center mix-blend-multiply">
          <Image src={ImageProduct} alt="" className="md:-my-20"></Image>
        </div>
      </div>
    </div>
  );
}
