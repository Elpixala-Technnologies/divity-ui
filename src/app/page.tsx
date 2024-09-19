import { banner2, icon2, icon3, icon4 } from "@/assets";
import HomeBanner from "@/components/bannersAndSliders/HomeBanner";
import { Button } from "@/components/Button";
import Wrapper from "@/components/Wrappers";
import { BoldWordsByPosition } from "@/utils/boldWordsByPosition";
import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

export default function Homepage() {
  return (
    <Wrapper containerClassName="mt-40">
      <div className="swiperStyle2 relative mb-16">
        <HomeBanner />
      </div>
      <div className="mb-16">
        <FourBenefitSection />
      </div>
      <div className="relative mb-16 overflow-hidden rounded-xl">
        <Image
          src={banner2}
          alt="banner"
          width={1500}
          height={1500}
          className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        />
        <div className="max-md: relative z-10 flex flex-wrap items-center justify-between gap-5 p-5 max-md:justify-center max-md:text-center md:p-10">
          <h2 className="inline-block bg-gradient-to-t from-zinc-500 to-white bg-clip-text text-3xl font-bold text-transparent md:text-7xl">
            Explore deals on Car Audio
          </h2>
          <Button variant="orange" className="text-nowrap !rounded-none">
            See More <MdArrowOutward />
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}

function FourBenefitSection() {
  const cards = [
    { icon: icon2, text: "1 year Warranty", positions: [0, 1] },
    { icon: icon3, text: "7 Day Replacement", positions: [0, 1] },
    { icon: icon4, text: "GST Billing", positions: [0, 0] },
    { icon: icon4, text: "Your Place Delivery", positions: [0, 1] },
  ];
  return (
    <ul className="flex-center w-full flex-wrap gap-3 md:gap-20">
      {cards?.map((card, index) => (
        <li key={index} className="flex-center flex-col gap-2">
          <Image
            src={card.icon}
            alt="icon"
            width={100}
            height={100}
            className="h-20 object-contain"
          />
          <p>
            <BoldWordsByPosition text={card.text} positions={card?.positions} />
          </p>
        </li>
      ))}
    </ul>
  );
}
