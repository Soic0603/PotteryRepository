import Image from "next/image";
import PotteryLogo from "/public/svg/pottery-logo.svg";

export default function Footer() {
  return (
    <div className="px-[82px] pb-[100px] flex flex-col space-y-[41px]">
      <div className="w-full flex space-x-[20px] border-t border-[#B7B7B7] pt-[12px]">
        <div className="w-1/2">
          <Image src={PotteryLogo} alt="" className="w-[81px] mb-[20px]" />
          <div className="flex space-x-[20px] text-[#333] text-[12px] leading-[19px]">
            <div className="w-full">
              회사명 : 주식회사 포터리 <br />
              대표이사 : 김건우
              <br />
              주소 : 서울특별시 마포구 양화로 73, 체리스빌딩 2/3층
              <br />
              사업자 등록번호 : 504-88-01834
              <br />
              통신판매업번호 : 2021-서울마포-1570
            </div>
            <div className="w-full">
              온라인 고객센터
              <br />
              운영시간 : 10:00-17:00 (주말/공휴일 휴무)
              <br />
              연락처 : 02-332-9934
            </div>
          </div>
        </div>
        <div className="w-1/2 flex space-x-[20px]">
          <div className="w-full flex space-x-[20px]">
            <div className="text-[12px] font-semibold leading-[19px] whitespace-pre">
              위치 및 언어 설정
            </div>
            <div className="w-full space-y-[13px] text-[12px] text-[#333] leading-[19px]">
              <div className="border-b border-[#B7B7B7] pb-[13px]">배송</div>
              <div className="border-b border-[#B7B7B7] pb-[13px]">언어</div>
            </div>
          </div>
          <div className="w-full flex space-x-[20px]">
            <div className="text-[12px] font-semibold leading-[19px] whitespace-pre">
              회사정보
            </div>
            <div className="w-full space-y-[13px] text-[12px] text-[#333] leading-[19px]">
              <div className="border-b border-[#B7B7B7] pb-[13px]">
                회사 정보
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
