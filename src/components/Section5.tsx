import Image from "next/image";
import ImageProduct from "/public/image/pottery-product.jpeg";
import IconRightBlack from "/public/svg/IconRightBlack.svg";

export default function Section5() {
    return (
        <div className="flex space-x-5">
            <div className="flex align-center w-full h-[500px] bg-gray-100 relative px-[60px] py-[125px]">
                <div className="flex justify-between items-center w-full h-[250px]">
                    <div className='w-[296px] h-[167px] flex justify-center flex-col text-black'>
                        <div className="text-[17px] leading-4 mb-[12px]">캠페인 | 여름 23</div>
                        <div className="text-[32px] leading-[40px] mb-[32px]">
                            포터리만의 유려한 <br />
                            실루엣과 편안한 착용감
                        </div>
                        <div className="flex space-x-[30px]">
                            <button className="bg-black w-[125px] rounded-[10px] text-[#fff] py-[10px] leading-4">
                                구입하기
                            </button>
                            <button className="text-black flex justify-center items-center gap-[8px]">
                                더 알아보기
                                <Image src={IconRightBlack} alt='' />
                            </button>
                        </div>
                    </div>
                    <div className="w-[274px] h-[full] mix-blend-multiply">
                        <Image src={ImageProduct} alt='' style={{ objectFit: 'cover' }} />
                    </div>
                </div>
            </div>
            <div className="flex align-center w-full h-[500px] bg-gray-100 relative px-[60px] py-[125px]">
                <div className="flex justify-between items-center w-full h-[250px]">
                    <div className='w-[296px] h-[167px] flex justify-center flex-col text-black'>
                        <div className="text-[17px] leading-4 mb-[12px]">캠페인 | 여름 23</div>
                        <div className="text-[32px] leading-[40px] mb-[32px]">
                            포터리만의 유려한 <br />
                            실루엣과 편안한 착용감
                        </div>
                        <div className="flex space-x-[30px]">
                            <button className="bg-black w-[125px] rounded-[10px] text-[#fff] py-[10px] leading-4">
                                구입하기
                            </button>
                            <button className="text-black flex justify-center items-center gap-[8px]">
                                더 알아보기
                                <Image src={IconRightBlack} alt='' />
                            </button>
                        </div>
                    </div>
                    <div className="w-[274px] h-[full] mix-blend-multiply">
                        <Image src={ImageProduct} alt='' style={{ objectFit: 'cover' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
