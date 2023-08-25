import Image from "next/image";
import ImageProduct from "/public/image/pottery-product.jpeg";
import IconRightBlack from "/public/svg/IconRightBlack.svg";

export default function Section3() {
    return (
        <div className="w-full h-[500px] bg-gray-100 relative">
            <div className="absolute left-[80px] top-[38px] flex justify-between items-center w-full h-[424px] gap-[40px]">
                <div className='w-[620px] h-[424px] top-0 bottom-0 left-[80px] flex justify-center flex-col text-black'>
                    <div className="text-[17px] leading-4 mb-[12px]">캠페인 | 여름 23</div>
                    <div className="text-[45px] leading-[55px] mb-[32px]">
                        포터리만의 유려한 <br />
                        실루엣과 편안한 착용감
                    </div>
                    <div className="flex space-x-[30px]">
                        <button className="bg-black w-[125px] rounded-[10px] text-[#fff] py-[10px] leading-4 bg-blackounded-[10px]">
                            구입하기
                        </button>
                        <button className="text-black flex justify-center items-center gap-[8px]">
                            더 알아보기
                            <Image src={IconRightBlack} alt=''></Image>
                        </button>
                    </div>
                </div>
                <div className="w-[736px] h-full mix-blend-multiply">
                    <Image src={ImageProduct} alt=''></Image>
                </div>
            </div>
        </div>
    );
}
