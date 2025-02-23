import React from "react";

import Image from "next/image";
import Button from "../../common/Button";

const TopNotificationBar = () => {
  return (
    <div className="bg-primary-green min-h-fit flex items-center justify-center w-full gap-4 px-5 py-2 flex-nowrap">
      <Image
        src="/assets/icons/CaseMinimalistic.svg"
        alt="case-icon"
        width={24}
        height={24}
      />
      <p className="font-quicksand text-primary-white font-semibold mobile:text-base text-sm">
        Overseas trip? Get the latest information on travel guides
      </p>
      <Button
        label="More Info"
        className="black_btn min-w-fit"
        onClick={() => {}}
      />
    </div>
  );
};

export default TopNotificationBar;
