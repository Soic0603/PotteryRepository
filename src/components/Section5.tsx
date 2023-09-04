import Image from "next/image";
import ImageProduct from "/public/image/pottery-product.jpeg";
import IconRightBlack from "/public/svg/icon-right-black.svg";

export default function Section5() {
  return (
    <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
      <div className="flex justify-center align-center w-full bg-gray-100 relative px-[24px] md:px-[60px] py-[32px] md:py-[125px]">
        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <div className="flex justify-center flex-col text-black min-w-max">
            <div className="text-[12px] md:text-[17px] leading-[140%] md:leading-4 mb-[8px] md:mb-[12px] hidden md:flex">
              캠페인 | 여름 23
            </div>
            <div className="text-[24px] md:text-[32px] leading-[130%] md:leading-[40px] mb-[20px] md:mb-[32px]">
              포터리만의 유려한 <br />
              실루엣과 편안한 착용감
            </div>
            <div className="flex space-x-[0px] md:space-x-[30px]">
              <div className="hidden md:flex">
                <button className="bg-black w-[125px] rounded-[10px] text-[#fff] py-[10px] leading-4 bg-blackounded-[10px]">
                  구입하기
                </button>
              </div>
              <button className="text-black flex justify-center items-center gap-[8px]">
                더 알아보기
                <Image src={IconRightBlack} alt="" />
              </button>
            </div>
          </div>
          <div className="max-w-[274px] flex items-center mix-blend-multiply">
            <Image
              src={ImageProduct}
              alt=""
              style={{ objectFit: "cover", height: 250 }}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center align-center w-full bg-gray-100 relative px-[24px] md:px-[60px] py-[32px] md:py-[125px]">
        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <div className="flex justify-center flex-col text-black min-w-max">
            <div className="text-[12px] md:text-[17px] leading-[140%] md:leading-4 mb-[8px] md:mb-[12px] hidden md:flex">
              캠페인 | 여름 23
            </div>
            <div className="text-[24px] md:text-[32px] leading-[130%] md:leading-[40px] mb-[20px] md:mb-[32px]">
              포터리만의 유려한 <br />
              실루엣과 편안한 착용감
            </div>
            <div className="flex space-x-[0px] md:space-x-[30px]">
              <div className="hidden md:flex">
                <button className="bg-black w-[125px] rounded-[10px] text-[#fff] py-[10px] leading-4 bg-blackounded-[10px]">
                  구입하기
                </button>
              </div>
              <button className="text-black flex justify-center items-center gap-[8px]">
                더 알아보기
                <Image src={IconRightBlack} alt="" />
              </button>
            </div>
          </div>
          <div className="max-w-[274px] flex items-center mix-blend-multiply">
            <Image
              src={ImageProduct}
              alt=""
              style={{ objectFit: "cover", height: 250 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
