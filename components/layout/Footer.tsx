import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <section className="font-quicksand  w-full bg-[#222222] border-t-[29px]  border-primary-green min-h-fit z-20 relative">
      <div className="mx-10 mt-12 pb-14 flex flex-col md:flex-row items-center justify-between text-[#CACACA] gap-10 lg:gap-20 border-b border-[#FFFFFF17]">
        <div className="md:w-6/12 mx-12 w-full flex flex-col gap-10">
          <Image
            src="/alxLogoWhite.svg"
            width={70}
            height={70}
            alt="alx logo"
          />
          <p className="text-left text-base text-[#CACACA] ">
            ALX is a platform where travelers can discover and book unique,
            comfortable, and affordable lodging options worldwide. From cozy
            city apartments and tranquil countryside retreats href exotic beach
            side villas, ALX connects you with the perfect place href stay for
            any trip.
          </p>
        </div>
        <div className="w-full md:w-6/12 py-10 flex items-start  justify-between px-6 max-sm:grid max-sm:grid-cols-2 gap-10">
          {/* first Section =================== */}
          <div className="flex flex-col text-left gap-5">
            <h2 className="text-2xl font-semibold">Explore</h2>
            <ul className="text-sm gap-1 flex flex-col">
              <li>
                <Link href="/">Apartments in Dubai</Link>
              </li>
              <li>
                <Link href="/">Hotels in New York</Link>
              </li>
              <li>
                <Link href="/">Villa in Spain</Link>
              </li>
              <li>
                <Link href="/">Mansion in Indonesia</Link>
              </li>
            </ul>
          </div>
          {/* Second section */}
          <div className="flex flex-col text-left gap-5">
            <h2 className="text-2xl font-semibold">Company</h2>
            <ul className="text-sm gap-1 flex flex-col">
              <li>
                <Link href="/">About us</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">Customers</Link>
              </li>
              <li>
                <Link href="/">Brand</Link>
              </li>
            </ul>
          </div>
          {/* Third section =============== */}
          <div className="flex flex-col text-left gap-5">
            <h2 className="text-2xl font-semibold">Help</h2>
            <ul className="text-sm gap-1 flex flex-col">
              <li>
                <Link href="/">Support</Link>
              </li>
              <li>
                <Link href="/">Cancel booking</Link>
              </li>
              <li>
                <Link href="/">Refund Process</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-[#CACACA] mx-12 py-10 md:py-4 flex flex-col md:flex-row justify-center md:justify-between gap-4 text-sm font-normal ">
        <p className="text-center">
          Some hotel requires you to cancel more than 24 hours before check-in.
          Details{" "}
          <span className="text-primary-green">
            <Link href="/">here</Link>
          </span>
        </p>

        <div>
          <ul className="flex justify-evenly gap-5">
            <li>
              <Link href="/">Terms of Service</Link>
            </li>
            <li>
              <Link href="/">Policy service</Link>
            </li>
            <li>
              <Link href="/">Cookies Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
