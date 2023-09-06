"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";

export default function Category() {
  const [tab, setTab] = useState(3);
  return (
    <div className="w-full h-screen overflow-auto border-box">
      <Header />
      <div className="space-y-5 overflow-hidden">
        <Section3 />
        <Section3 />
        <Section3 />
        <div>
          <div className="text-[28px] font-semibold leading-[120%]">
            당신에게 알맞는 셔츠를 골라보세요.
          </div>

          <div className="w-full flex items-center justify-center">
            <div className="border border-[#333] rounded-xl flex items-center p-0.5 space-x-1 relative">
              <div
                style={{
                  background: tab === 0 ? "#333" : "#FFF",
                  color: tab === 0 ? "#FFF" : "#000",
                }}
                className="w-[214px] py-[8.5px] bg-[#EDEDED] z-50 text-center cursor-pointer rounded-xl "
                onClick={() => setTab(0)}
              >
                라인별
              </div>
              <div
                style={{
                  background: tab === 1 ? "#333" : "#FFF",
                  color: tab === 1 ? "#FFF" : "#000",
                }}
                className="w-[214px] py-[8.5px] z-50 text-center cursor-pointer rounded-xl"
                onClick={() => setTab(1)}
              >
                소재별
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
