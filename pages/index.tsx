import { PROPERTYLISTINGSAMPLE } from "../constants";

import AllCards from "../components/common/AllCards";
export default function Home() {
  return (
    <>
      <section className="w-[90%] my-6 mx-auto">
        <div className="lg:bg-cover lg:bg-bottom bg-center bg-cover h-[380px] lg:h-[500px] md:rounded-[27px] rounded-xl flex items-center flex-col justify-center text-white md:gap-4 gap-2 bg-HERO max-md:bg-HERO_MOBILE">
          <h1 className="font-serif text-center font-semibold md:text-[60px] text-[30px] ">
            Find your favorite
            <br /> place here!
          </h1>
          <p className="font-quicksand font-medium text-sm md:text-base">
            The best prices for over 2 million properties worldwide
          </p>
        </div>
        <AllCards allProducts={PROPERTYLISTINGSAMPLE} />
      </section>
    </>
  );
}
