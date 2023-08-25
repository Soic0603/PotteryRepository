import Image from "next/image";
import Section2Img from "/public/image/pottery-section2-img.jpeg";
import IconRight from "/public/svg/IconRight.svg";

export default function Section2() {
    return (
        <div className="w-full h-[655px] relative">
            <div>
                <Image src={Section2Img} fill style={{ objectFit: 'cover' }} alt='' className="bg-center"></Image>
                <div className="absolute inset-0 bg-gradient-to-r from-black opacity-60 to-transparent"></div>
            </div>
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
                    <button className="text-white flex justify-center items-center gap-[8px]">
                        더 알아보기
                        <Image src={IconRight} alt=''></Image>
                    </button>
                </div>
            </div>
        </div >
    );
}
