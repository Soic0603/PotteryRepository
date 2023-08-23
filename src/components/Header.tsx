import Image from "next/image";
import PotteryLogo from "/public/svg/pottery_logo.svg";

export default function Header() {
  return (
    <div className="w-full flex justify-between max-w-7xl mx-auto border-b border-[#333]">
      {/* header left */}
      <div className="flex space-x-[30px] py-[10px] items-center text-[13px] font-medium leading-4 text-[#333]">
        <Image src={PotteryLogo} alt="" className="w-[75px] pr-[15px]" />
        <div>스토어</div>
        <div>셔츠</div>
        <div>데님</div>
        <div>셋업</div>
        <div>가이드</div>
      </div>
      {/* header right */}
      <div className="flex space-x-[30px] py-[10px] items-center text-[13px] font-medium leading-4 text-[#333]">
        <div>검색</div>
        <div>로그인</div>
        <div>쇼핑백</div>
        <div>고객지원</div>
      </div>
    </div>
  );
}
