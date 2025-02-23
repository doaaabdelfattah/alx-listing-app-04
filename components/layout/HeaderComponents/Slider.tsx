import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
// import Swiper core and required modules
import { Scrollbar } from "swiper/modules";
import Link from "next/link";
// import { useRouter } from "next/router";
const Slider = () => {
  // const router = useRouter(); // Get the current route

  const categories = [
    { icon: "/assets/icons/living-room 1.svg", label: "Rooms", link: "/" },
    { icon: "/assets/icons/mansion 1.svg", label: "Mansion", link: "/mansion" },
    {
      icon: "/assets/icons/farm 1.svg",
      label: "Countryside",
      link: "/country",
    },
    { icon: "/assets/icons/villa 1.svg", label: "Villa", link: "/" },
    { icon: "/assets/icons/palm-tree 1.svg", label: "Tropical", link: "/" },
    { icon: "/assets/icons/key-chain 1.svg", label: "New", link: "/" },
    {
      icon: "/assets/icons/swimming-pool 1.svg",
      label: "Amazing pool",
      link: "/",
    },
    { icon: "/assets/icons/vacations 1.svg", label: "Beach house", link: "/" },
    { icon: "/assets/icons/island (1) 1.svg", label: "Island", link: "/" },
    { icon: "/assets/icons/tent 1.svg", label: "Camping", link: "/camp" },
    {
      icon: "/assets/icons/apartment 1.svg",
      label: "Apartment",
      link: "/apartment",
    },
    { icon: "/assets/icons/home 1.svg", label: "House", link: "/house" },
    { icon: "/assets/icons/cottage 1.svg", label: "Lakefront", link: "/lake" },
    { icon: "/assets/icons/barn 1.svg", label: "Farm house", link: "/farm" },
    {
      icon: "/assets/icons/treehouse (1) 1.svg",
      label: "Tree house",
      link: "/",
    },
    { icon: "/assets/icons/cabin 1.svg", label: "Cabins", link: "/" },
    { icon: "/assets/icons/castle-tower 1.svg", label: "Castle", link: "/" },
  ];

  return (
    <div className="w-[90%] mx-auto py-3 font-quicksand relative">
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={5}
        slidesPerView={4} // Default for xs screens (less than 640px)
        // navigation
        // scrollbar={{ draggable: true }}
        loop={true}
        // autoplay
        breakpoints={{
          640: { slidesPerView: 5 },
          768: { slidesPerView: 7 },
          1024: { slidesPerView: 10 },
          1280: { slidesPerView: 15 },
        }}
        className="mySwiper"
      >
        {categories.map((category, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col text-[#616161] font-medium items-center cursor-pointer"
          >
            <Link
              href={category.link}
              // className={`
              //   group flex items-center flex-col relative ${
              //     router.pathname === category.link
              //       ? "text-black after:content-[''] after:mt-3 after:w-full after:h-[2px] after:bg-black"
              //       : ""
              //   }`}
              className={`group`}
            >
              <div className="flex items-center flex-col group hover-line transition-transform transform group-active:scale-95">
                <Image
                  src={category.icon}
                  width={30}
                  height={30}
                  alt={category.label}
                  className="transition-transform transform group-active:scale-95 filter text-red-500 hover:text-black"
                />
                <p className="text-xs mt-2 hover:text-black">
                  {category.label}
                </p>
              </div>
              {/* <span className="absolute bottom-[-12px] left-0 right-0 h-[2px] bg-transparent group-hover:bg-black group-active:bg-black transition-all duration-300"></span> */}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* White shadow on the left */}
      <div className="absolute top-0 right-0 h-full w-[150px] bg-gradient-to-l from-white pointer-events-none z-10"></div>
    </div>
  );
};

export default Slider;
