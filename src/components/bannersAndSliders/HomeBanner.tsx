"use client";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { banner1, gadget1, gadget2 } from "@/assets";
import { sliderText } from "@/utils/motion";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { Button } from "../Button";
import { FiShoppingCart } from "react-icons/fi";

export default function HomeBanner() {
  const uniqueId = "banner123";
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
      //   dynamicBullets: true,
    },
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Pagination, EffectFade, Navigation],
    effect: "fade",
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey(animationKey + 1);
  }, [currentSlide]);

  return (
    <>
      <Swiper
        {...swiperOptions}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)} // Update current slide index
        className="mySwiper"
      >
        {/* <AnimatePresence> */}
        {sliderContent.map((item, index) => (
          <SwiperSlide key={index} className="overflow-hidden rounded-xl">
            <HomeBannerCard
              img={item?.img}
              title={item?.title}
              subtitle={item?.subtitle}
              subtitle1={item?.subtitle1}
              currentSlide={currentSlide}
              animationKey={animationKey}
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
        ))}
        {/* </AnimatePresence> */}
      </Swiper>
      {/* Add navigation buttons */}
      {/* {sliderContent && ( */}
      <div
        className={`${uniqueId}-next swiper-button-next !right-2 !top-[70%] !h-12 !w-12 rounded-full !bg-zinc-100 !bg-opacity-30 !p-2.5 !text-xs !text-white md:!right-3 md:!top-1/2 md:!h-10 md:!w-10`}
      >
        <GrNext />
      </div>
      {/* )} */}
      {/* {sliderContent && ( */}
      <div
        className={`${uniqueId}-prev swiper-button-prev !left-2 !top-[70%] !h-12 !w-12 rounded-full !bg-zinc-100 !bg-opacity-30 !p-2.5 !text-xs !text-white md:!left-3 md:!top-1/2 md:!h-10 md:!w-10`}
      >
        <GrPrevious />
      </div>
      {/* )} */}
    </>
  );
}

function HomeBannerCard({
  img,
  title,
  subtitle,
  subtitle1,
  currentSlide,
  animationKey,
}: any) {
  return (
    <div
      className={`relative h-max w-full overflow-hidden rounded-xl bg-[#0f1014] text-white`}
    >
      <Image
        src={banner1}
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        alt="banner image"
      />
      <div className="relative z-10 grid grid-cols-1 overflow-hidden max-md:pb-10 md:grid-cols-2">
        <motion.div
          variants={sliderText}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8, delay: 0.5 }}
          className="col-span-1 flex h-full w-full flex-col justify-center gap-5 p-8 max-md:items-center md:p-20"
          key={animationKey}
        >
          <p className="">{subtitle}</p>
          <h2 className="inline-block max-w-screen-sm bg-gradient-to-t from-zinc-500 via-zinc-200 to-zinc-500 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
            {title}
          </h2>
          <p className="">{subtitle1}</p>
          <Link href={"/cart"} className="w-min">
            <Button
              variant="orange"
              className="flex items-center gap-2 text-nowrap"
            >
              <FiShoppingCart />
              <p>Shop Now</p>
            </Button>
          </Link>
        </motion.div>
        <div className="flex-center col-span-1 overflow-hidden">
          <Image
            src={img}
            alt="gadget"
            width={400}
            height={400}
            className="max-h-56 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

const sliderContent = [
  {
    id: 1,
    img: gadget1,
    title: "JBL Club WS 1200",
    subtitle: "Gear up with JBL speakers",
    subtitle1: "12’’ Shallow Mount Sunwoofer",
    href: "/",
  },
  {
    id: 1,
    img: gadget2,
    title: "JBL Club Drive 500",
    subtitle: "Gear up with JBL Drive",
    subtitle1: "12’’ Shallow Mount Drive",
    href: "/",
  },
];
