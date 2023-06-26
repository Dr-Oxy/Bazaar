import Image from 'next/image';
import {
  hamburgerIcon,
  searchIconwhite,
  locationIconWhite,
  dangerIconWhite,
  heartIconWhite,
  cartIconWhite,
  profileAvartar,
} from '@/public/assets/icons';

import { bazaarIcon } from '@/public/assets/images';

const Navbar = () => {
  return (
    <nav className="bg-primary-green py-5">
      <div className="pl-4 pr-8 xl:px-0 max-w-6xl mx-auto flex items-center justify-between gap-x-6 lg:gap-x-0">
        <div className="flex items-center gap-x-4 cursor-pointer">
          <Image src={hamburgerIcon} alt="menu icon" />
          <Image
            className="hidden lg:block"
            src={bazaarIcon}
            alt={`Bazaar logo`}
            height={42}
            width={65}
          />
        </div>

        <form className="flex-1  flex items-center justify-center lg:gap-x-1">
          <div className="w-full lg:w-1/2 flex items-center gap-x-4 bg-[#0E4444] lg:bg-white/10 rounded-lg px-3 lg:px-5 py-3 lg:py-4">
            <Image src={searchIconwhite} alt="search icon" />
            <input
              className="w-full bg-transparent shadow-none border-0 outline-0 text-white text-sm "
              type="text"
              placeholder="Search for Grocery items"
            />
          </div>

          <div className="hidden lg:flex items-center gap-x-4 border border-white rounded px-5 py-4">
            <Image src={locationIconWhite} alt="location icon" />
            <span className="capitalize text-xs text-white">location</span>
          </div>
        </form>

        <div className="lg:hidden relative">
          <Image className="" src={cartIconWhite} alt="cart icon" />

          <div className="absolute -top-3 -right-4 w-5 h-5 rounded-full bg-white/40 text-white flex items-center justify-center font-medium text-[10px]">
            1
          </div>
        </div>

        <ul className="hidden lg:flex items-center gap-x-12 text-white text-[10px]">
          <li className="cursor-pointer">
            <Image src={dangerIconWhite} alt="help icon" />
            <span className="mt-1 block capitalize text-center">Help</span>
          </li>

          <li className="cursor-pointer relative">
            <Image src={cartIconWhite} alt="cart icon" />
            <span className="mt-1 block capitalize text-center">cart</span>

            <div className="absolute -top-3 -right-4 w-5 h-5 rounded-full bg-[#D55015] text-white flex items-center justify-center font-medium text-[10px]">
              1
            </div>
          </li>

          <li className="cursor-pointer">
            <Image src={heartIconWhite} alt="save con" />
            <span className="mt-1 block capitalize text-center">saved</span>
          </li>

          <li className="cursor-pointer">
            <div className="h-10 w-10 rounded-full flex items-center justify-center border border-white">
              <Image src={profileAvartar} alt="profile avatar icon" />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
