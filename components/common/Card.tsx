// components/Card.tsx
import React from "react";
import { CardProps } from "../../interfaces";
import Image from "next/image";
import { useRouter } from "next/router"; // Import useRouter

const Card: React.FC<CardProps> = ({
  id,
  name,
  address,
  rating,
  category,
  price,
  offers,
  image,
}) => {
  const router = useRouter();
  return (
    <section className="flex">
      <div
        className="flex-col flex font-quicksand justify-start  hover:scale-105 transition-all duration-200 gap-2 cursor-pointer"
        onClick={() => router.push(`/property/${id}`)}
      >
        {/* ============= 0 . IMAGE ============ */}
        <div className="">
          <Image
            src={image}
            height={100}
            width={400}
            alt={name}
            className="rounded-2xl"
          />
        </div>
        {/* ============= 1 . Categories ============ */}
        <div className="flex flex-wrap justify-start items-start py-3 gap-1">
          {category.map((cat, i) => (
            <div
              className="bg-primary-light-grey rounded-2xl py-[6px] px-[13px]"
              key={i}
            >
              <p className="text-xs font-medium">{cat}</p>
            </div>
          ))}
        </div>
        {/* ============= 2 . Property TITLE ============ */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <h2 className="text-[#161117] font-semibold text-lg">{name}</h2>
            <h3 className="text-[#929292] font-medium text-sm">
              {address.state}, {address.city}, {address.country}
            </h3>
          </div>
          <div className="flex justify-start items-center gap-1 text-base font-medium">
            <span>
              <Image
                src="/assets/icons/Star.png"
                width={13}
                height={13}
                alt="star rating"
              />
            </span>
            {rating}
          </div>
        </div>
        {/* ============= 3 . Property Feature ============ */}
        <div className="flex justify-between items-center font-medium text-xs">
          <div className="border-primary-light-grey border flex gap-4 rounded-2xl py-1 px-2">
            <div className="flex items-center justify-center gap-1">
              <span>
                <Image
                  src="/assets/icons/Property Features/bed 1.svg"
                  width={13}
                  height={13}
                  alt="beds"
                />
              </span>
              {offers.bed}
            </div>

            <div className="flex items-center justify-center gap-1">
              <span>
                <Image
                  src="/assets/icons/Property Features/bed 1.svg"
                  width={13}
                  height={13}
                  alt="beds"
                />
              </span>
              {offers.bed}
            </div>
            <div className="flex items-center justify-center gap-1">
              <span>
                <Image
                  src="/assets/icons/Property Features/people 1.svg"
                  width={13}
                  height={13}
                  alt="guest"
                />
              </span>
              {offers.occupants}
            </div>
          </div>

          <div className="flex items-center font-semibold">
            <div className="">
              <span className="text-lg ">${price}</span>
              <span className="">/n</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
