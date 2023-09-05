import Image from "next/image";
import PotteryLogo from "/public/svg/pottery-logo.svg";

export default function Footer() {
  return (
    <>
      {/* PC footer */}
      <div className="px-[82px] pb-[100px] hidden lg:flex flex-col space-y-[41px]">
        <div className="w-full flex space-x-[20px] border-t border-[#B7B7B7] pt-[12px]">
          <div className="w-1/2">
            <Image src={PotteryLogo} alt="" className="w-[81px] mb-[20px]" />
            <div className="flex space-x-[20px] text-[#333] text-[12px] leading-[19px]">
              <div className="w-full space-y-[8px]">
                회사명 : 주식회사 포터리 <br />
                대표이사 : 김건우
                <br />
                주소 : 서울특별시 마포구 양화로 73, 체리스빌딩 2/3층
                <br />
                사업자 등록번호 : 504-88-01834
                <br />
                통신판매업번호 : 2021-서울마포-1570
              </div>
              <div className="w-full space-y-[8px]">
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
              <div className="text-[12px] min-w-[88px] font-semibold leading-[19px] whitespace-pre">
                위치 및 언어 설정
              </div>
              <div className="w-full space-y-[13px] text-[12px] text-[#333] leading-[19px]">
                <div className="border-b border-[#B7B7B7] pb-[13px]">배송</div>
                <div className="border-b border-[#B7B7B7] pb-[13px]">언어</div>
              </div>
            </div>
            <div className="w-full flex space-x-[20px]">
              <div className="text-[12px] min-w-[88px] font-semibold leading-[19px] whitespace-pre">
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
        <div className="w-full flex space-x-[20px] border-t border-[#B7B7B7] pt-[12px]">
          <div className="w-1/2 flex space-x-[20px]">
            <div className="text-[12px] min-w-[196px] font-semibold leading-[19px] whitespace-pre">
              쇼핑 및 알아보기
            </div>
            <div className="w-full flex space-x-[20px]">
              <div className="w-full space-y-[13px] text-[12px] text-[#333] leading-[19px]">
                <div className="border-b border-[#B7B7B7] pb-[13px]">
                  스토어
                </div>
                <div className="border-b border-[#B7B7B7] pb-[13px]">셔츠</div>
                <div className="border-b border-[#B7B7B7] pb-[13px]">니트</div>
                <div className="border-b border-[#B7B7B7] pb-[13px]">
                  티셔츠
                </div>
                <div className="border-b border-[#B7B7B7] pb-[13px]">팬츠</div>
              </div>
              <div className="w-full space-y-[13px] text-[12px] text-[#333] leading-[19px]">
                <div className="border-b border-[#B7B7B7] pb-[13px]">데님</div>
                <div className="border-b border-[#B7B7B7] pb-[13px]">점퍼</div>
                <div className="border-b border-[#B7B7B7] pb-[13px]">코트</div>
                <div className="border-b border-[#B7B7B7] pb-[13px]">다운</div>
                <div className="border-b border-[#B7B7B7] pb-[13px]">
                  악세서리
                </div>
                <div className="border-b border-[#B7B7B7] pb-[13px]">
                  아카이브
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex space-x-[20px]">
            <div className="w-full flex">
              <div className="text-[12px] min-w-[88px] font-semibold leading-[19px] whitespace-pre">
                주문 및 지원
              </div>
              <div className="w-full space-y-[13px] text-[12px] text-[#333] leading-[19px]">
                <div className="border-b border-[#B7B7B7] pb-[13px]">
                  문의하기
                </div>
                <div className="border-b border-[#B7B7B7] pb-[13px]">
                  자주 묻는 질문
                </div>
                <div className="border-b border-[#B7B7B7] pb-[13px]">
                  주문 상태
                </div>
                <div className="border-b border-[#B7B7B7] pb-[13px]">계정</div>
                <div className="border-b border-[#B7B7B7] pb-[13px]">
                  가까운 매장 찾기
                </div>
              </div>
            </div>
            <div className="w-full flex">
              <div className="text-[12px] min-w-[88px] font-semibold leading-[19px] whitespace-pre">
                포터리 정보
              </div>
              <div className="w-full space-y-[13px] text-[12px] text-[#333] leading-[19px]">
                <div className="border-b border-[#B7B7B7] pb-[13px]">
                  브랜드 스토리
                </div>
                <div className="border-b border-[#B7B7B7] pb-[13px]">
                  채용 안내
                </div>
                <div className="border-b border-[#B7B7B7] pb-[13px]">
                  문의 및 규정 준수
                </div>
                <div className="border-b border-[#B7B7B7] pb-[13px]">
                  개인 정보 처리 방침
                </div>
                <div className="border-b border-[#B7B7B7] pb-[13px]">
                  이용 약관
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile footer */}
      <div className="px-[20px] pb-[40px] lg:hidden">
        <div className="w-full border-t border-[#B7B7B7]" />
        <Image
          src={PotteryLogo}
          alt=""
          className="w-[81px] mb-[20px] mt-[12px]"
        />
        <div className="space-y-[10px] mb-[24px]">
          <div className="text-[12px] min-w-[88px] font-medium leading-[19px] whitespace-pre pb-[10px] border-b border-[#B7B7B7] w-full">
            위치 및 언어 설정
          </div>
          <div className="text-[12px] min-w-[88px] font-medium leading-[19px] whitespace-pre pb-[10px] border-b border-[#B7B7B7] w-full">
            회사정보
          </div>
          <div className="text-[12px] min-w-[196px] font-medium leading-[19px] whitespace-pre pb-[10px] border-b border-[#B7B7B7] w-full">
            쇼핑 및 알아보기
          </div>
          <div className="text-[12px] min-w-[88px] font-medium leading-[19px] whitespace-pre pb-[10px] border-b border-[#B7B7B7] w-full">
            주문 및 지원
          </div>
          <div className="text-[12px] min-w-[88px] font-medium leading-[19px] whitespace-pre pb-[10px] border-b border-[#B7B7B7] w-full">
            포터리 정보
          </div>
        </div>
        <div className="w-full space-y-[8px] text-[12px] text-[#333] leading-[19px]">
          회사명 : 주식회사 포터리 <br />
          대표이사 : 김건우
          <br />
          주소 : 서울특별시 마포구 양화로 73, 체리스빌딩 2/3층
          <br />
          사업자 등록번호 : 504-88-01834
          <br />
          통신판매업번호 : 2021-서울마포-1570
          <br />
          <br />
          온라인 고객센터
          <br />
          운영시간 : 10:00-17:00 (주말/공휴일 휴무)
          <br />
          연락처 : 02-332-9934
        </div>
      </div>
    </>
  );
}
