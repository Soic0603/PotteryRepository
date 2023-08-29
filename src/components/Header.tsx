import Image from "next/image";
import PotteryLogo from "/public/svg/pottery-logo.svg";
import HamburgerIcon from "/public/svg/icon-hamburger.svg";
import SearchIcon from "/public/svg/icon-search.svg";
import ShoppingIcon from "/public/svg/icon-shopping.svg";

export default function Header() {
  return (
    <div className="w-full flex justify-between max-w-7xl mx-auto border-b border-[#333]">
      {/* header left */}
      <div className="space-x-[30px] py-[10px] items-center text-[13px] font-medium leading-4 text-[#333] hidden md:flex">
        <Image src={PotteryLogo} alt="" className="w-[75px] pr-[15px]" />
        <div>스토어</div>
        <div>셔츠</div>
        <div>데님</div>
        <div>셋업</div>
        <div>가이드</div>
      </div>
      {/* header right */}
      <div className=" space-x-[30px] py-[10px] items-center text-[13px] font-medium leading-4 text-[#333] hidden md:flex">
        <div>검색</div>
        <div>로그인</div>
        <div>쇼핑백</div>
        <div>고객지원</div>
      </div>
      {/* header mobile */}
      <div className="flex justify-between w-full border-b mx-6 py-1.5 border-[#333] md:hidden">
        <Image src={PotteryLogo} alt="" className="w-[75px]" />
        <div className="flex space-x-5">
          <Image src={SearchIcon} alt="" className="w-[24px] h-[24px]" />
          <Image src={ShoppingIcon} alt="" className="w-[24px] h-[24px]" />
          <Image src={HamburgerIcon} alt="" className="w-[24px] h-[24px]" />
        </div>
      </div>
    </div>
  );
}
