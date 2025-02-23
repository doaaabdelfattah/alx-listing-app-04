import React from "react";
import Image from "next/image";

const SearchBar = () => {
  return (
    <section className=" border-primary-border border rounded-full px-5 py-1 lg:w-8/12 xl:w-6/12 w-full font-quicksand min-h-fit flex items-center justify-between ">
      <div className="flex items-center justify-between p-1">
        {/* ========== Large screens ============ */}
        <form className="sm:flex items-center justify-start hidden">
          <div className="flex flex-col justify-start text-sm  lg:w-6/12">
            <label htmlFor="location" className="">
              Location
            </label>
            <input
              type="text"
              id="location"
              placeholder="Search for destination"
              name="location"
              className="border-none"
            />
          </div>
          <div className="flex-1 flex">
            <div className="flex flex-col justify-start text-sm font-quicksand border-l pl-3 ">
              <label htmlFor="check-in" className="">
                Check in
              </label>
              <input
                type="text"
                id="check-in"
                placeholder="Add date"
                name="check-in"
                className=""
              />
            </div>
            <div className="flex flex-col justify-start text-sm font-quicksand border-l pl-3 ">
              <label htmlFor="check-out" className="">
                Check out
              </label>
              <input
                type="text"
                id="check-out"
                placeholder="Add date"
                name="check-out"
                className=""
              />
            </div>
            <div className="flex flex-col justify-start text-sm font-quicksand border-l pl-3 ">
              <label htmlFor="check-out" className="">
                People
              </label>
              <input
                type="text"
                id="check-out"
                placeholder="Add guest"
                name="check-out"
                className=""
              />
            </div>
          </div>
        </form>

        {/* =============== ===== Mobile Screens ================= */}
        <form className="max-sm:flex text-sm flex-col hidden ">
          <p>Where to?</p>
          <div className="flex items-center justify-start">
            <input
              type="text"
              id="location"
              placeholder="Location"
              name="location"
              className=""
            />
            <input
              type="text"
              id="date-"
              placeholder="Date"
              name="date"
              className=""
            />
            <input
              type="text"
              id="date"
              placeholder="Add guest"
              name="guest"
              className=""
            />
          </div>
        </form>
      </div>

      <div className="flex items-center justify-center">
        <button
          className="bg-primary-gold w-[50px] h-[50px] rounded-full flex items-center justify-center"
          type="submit"
        >
          <Image
            src="/Linear/Search/Magnifer.svg"
            width={20}
            height={20}
            alt="magifier search"
          />
        </button>
      </div>
    </section>
  );
};

export default SearchBar;
