import React from "react";
import Header from "@/app/components/Header";
import Image from "next/image";

function Home() {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-[80%]">
        <div className="w-1/2 ">
          <h1 className="text-[40px] font-bold leading-[65.8px] tracking-[2.5%] w-[496px] absolute left-[176px] top-[316px]">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="text-[30px] font-medium w-[902px] text-[#787054] leading-[49.35px] tracking-[2.5%] absolute top-[573px] left-[171px] whitespace-pre-line">
            An example of intricate workmanship and detail, elegant necklaces
            and long and short chains form a part of our <br/> desirable collection.
          </p>
          <button className="h-[58px] text-[30px] leading-[37.5px] text-[#FFFFFF] bg-[#A29875] w-[288px] p-[10px] rounded-[10px] gap-[10px] absolute top-[730px] left-[176px]">
            Explore Now
          </button>
        </div>

        <div className="w-1/2 flex justify-center items-center">
          <Image
            src={"/images/necklace.png"}
            alt="hero image"
            width={462}
            height={647}
            className="absolute top-[198px] left-[1164px]"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Home;
