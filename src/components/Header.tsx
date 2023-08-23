import Image from "next/image";
import PotteryLogo from "/public/svg/pottery_logo.svg";

export default function Header() {
  return (
    <div className="w-full flex justify-between max-w-7xl mx-auto border-b border-[#333]">
      {/* header left */}
      <div className="flex space-x-[30px] py-[10px] items-center">
        {/* <div className=" font-bold pr-[15px]">POTTERY</div> */}
        <Image src={PotteryLogo} alt="" className="w-[75px] pr-[15px]" />

        <div className="text-[13px] font-medium leading-4 text-[#333]">
          스토어
        </div>
        <div className="text-[13px] font-medium leading-4 text-[#333]">
          셔츠
        </div>
        <div className="text-[13px] font-medium leading-4 text-[#333]">
          데님
        </div>
        <div className="text-[13px] font-medium leading-4 text-[#333]">
          셋업
        </div>
        <div className="text-[13px] font-medium leading-4 text-[#333]">
          가이드
        </div>
      </div>
      {/* header right */}
      <div className="flex space-x-[30px] py-[10px] items-center">
        <div className="text-[13px] font-medium leading-4 text-[#333]">
          검색
        </div>
        <div className="text-[13px] font-medium leading-4 text-[#333]">
          로그인
        </div>
        <div className="text-[13px] font-medium leading-4 text-[#333]">
          쇼핑백
        </div>
        <div className="text-[13px] font-medium leading-4 text-[#333]">
          고객지원
        </div>
      </div>
    </div>
  );
}
