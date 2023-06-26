import Image from 'next/image';

import { clockIconBlack, messageIconBlack } from '@/public/assets/icons';

const Banner = () => {
  return (
    <div className="bg-gradient-banner text-bazaar-black py-5 text-sm md:text-base text-normal ">
      <div className="px-4 xl:px-0 max-w-6xl  mx-auto flex items-center justify-center lg:justify-between">
        <div className="hidden lg:flex items-center">
          <Image src={messageIconBlack} alt="clock icon" />
          <span className="ml-2">service@supermart.ng</span>
        </div>

        <div className="flex items-center  ">
          <span>Want your order delivered today?</span>
          <span className="text-primary-gray mx-1 md:mx-3">Order in</span>
          <span className="font-medium">02:20:20</span>
        </div>

        <div className="hidden lg:flex items-center">
          <Image src={clockIconBlack} alt="clock icon" />
          <span className="ml-2"> We Deliver 7 Days A Week</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
